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
      <Paper elevation={10} sx={{ width: "81%", height: 900 }}>
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Box
            component="img"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 900,
              width: 900 * (overlayPosition / 100),
              minWidth: 900,
              maxWidth: {
                xs: 900 * (overlayPosition / 100),
                md: 900 * (overlayPosition / 100),
              },
            }}
            alt={imageDataStore.selectedLensImage.responsiveImage.alt}
            src={imageDataStore.selectedLensImage.responsiveImage.src}
          />
          <Box
            component="img"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 900,
              minWidth: 900,

              width: 900 * (overlayPosition / 100),
              maxWidth: { xs: 900, md: 900 },
              clipPath: `polygon(0% 0%, ${overlayPosition}% 0%, ${overlayPosition}% 100%, 0% 100%)`,
            }}
            alt={imageDataStore.selectedNakedEyeImage.responsiveImage.alt}
            src={imageDataStore.selectedNakedEyeImage.responsiveImage.src}
          />
          <Slider
            value={overlayPosition}
            onChange={(_, newVal) => handleOverlayChange(newVal as number)}
            sx={{
              position: "absolute",
              width: "100%",
              top: 450,
              left: 0,
              bottom: 0,
              zIndex: 1,
            }}
          />
          <ImageSelector />
        </Box>
      </Paper>
    );
  } else {
    return <></>;
  }
});
