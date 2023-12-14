import { Paper, ImageList, ImageListItem } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useRootStore } from "../main";

export interface ImageSelectorProps {}

export const ImageSelector: FC<ImageSelectorProps> = observer(() => {
  const { imageDataStore } = useRootStore();

  const imagesToSelect = imageDataStore.imageData;

  return (
    <Paper
      elevation={5}
      sx={{
        width: 400,
        position: "absolute",
        bottom: 50,
        left: 250,
        height: 80,
      }}
    >
      {imagesToSelect && (
        <ImageList sx={{ width: 300, height: 80 }} cols={3} rowHeight={80}>
          {imagesToSelect.map((image) => (
            <ImageListItem key={image.nakedEyeImage.id}>
              <img
                srcSet={`${image.nakedEyeImage.responsiveImage.src}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.nakedEyeImage.responsiveImage.src}?w=100&h=100&fit=crop&auto=format`}
                alt={image.nakedEyeImage.responsiveImage.alt}
                loading="lazy"
                onClick={() => imageDataStore.setSelectedNakedEyeImage(image)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Paper>
  );
});
