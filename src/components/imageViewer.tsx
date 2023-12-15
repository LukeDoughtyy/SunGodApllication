import { Paper, Slider, Box } from "@mui/material";
import { useRootStore } from "../main";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { ImageSelector } from "./imageSelector";

export interface ImageViewerProps {}

export const ImageViewer: FC<ImageViewerProps> = observer(() => {
  const { imageDataStore } = useRootStore();

  const [overlayPosition, setOverlayPosition] = useState(50);

  const handleOverlayChange = (newValue: number) => {
    setOverlayPosition(newValue);
  };

  if (
    imageDataStore.selectedNakedEyeImage &&
    imageDataStore.selectedLensImage
  ) {
    return (
      <Paper elevation={10}>
        <Box className="image-viewer-container">
          <Box
            component="img"
            className="image-viewer-container__image-constants"
            sx={lensViewBox(overlayPosition)}
            alt={imageDataStore.selectedLensImage.responsiveImage.alt}
            src={imageDataStore.selectedLensImage.responsiveImage.src}
          />
          <Box
            component="img"
            className="image-viewer-container__image-constants"
            sx={nakedEyeImageViewBox(overlayPosition)}
            alt={imageDataStore.selectedNakedEyeImage.responsiveImage.alt}
            src={imageDataStore.selectedNakedEyeImage.responsiveImage.src}
          />
          <Slider
            value={overlayPosition}
            onChange={(_, newVal) => handleOverlayChange(newVal as number)}
            className="image-viewer-container__percentage-slider"
          />
          <ImageSelector />
        </Box>
      </Paper>
    );
  } else {
    return <></>;
  }
});

const lensViewBox = (overlayPosition: number) => ({
  width: 900 * (overlayPosition / 100),
  maxWidth: {
    xs: 900 * (overlayPosition / 100),
    md: 900 * (overlayPosition / 100),
  },
});

const nakedEyeImageViewBox = (overlayPosition: number) => ({
  width: 900 * (overlayPosition / 100),
  maxWidth: { xs: 900, md: 900 },
  clipPath: `polygon(0% 0%, ${overlayPosition}% 0%, ${overlayPosition}% 100%, 0% 100%)`,
});
