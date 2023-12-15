import { Paper, ImageList, ImageListItem } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useRootStore } from "../main";
import ClearIcon from "@mui/icons-material/Clear";

export interface ImageSelectorProps {}

export const ImageSelector: FC<ImageSelectorProps> = observer(() => {
  const { imageDataStore } = useRootStore();

  const imagesToSelect = imageDataStore.imageData;

  return (
    <Paper elevation={5}>
      {imagesToSelect && (
        <ImageList className="image-selector-image-list" cols={4}>
          {imagesToSelect.map((image) => (
            <ImageListItem
              key={image.nakedEyeImage.id}
              className="image-selector-image-list__image-list-item"
            >
              <img
                className="image-selector-image-list__image-list-image"
                srcSet={`${image.nakedEyeImage.responsiveImage.src}?w=500&h=500&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.nakedEyeImage.responsiveImage.src}?w=500&h500&fit=crop&auto=format`}
                alt={image.nakedEyeImage.responsiveImage.alt}
                loading="lazy"
                onClick={() => imageDataStore.setSelectedNakedEyeImage(image)}
              />
            </ImageListItem>
          ))}
          <ImageListItem
            key={"exit"}
            style={{
              height: "100%",
              top: "25%",
              left: "25%",
            }}
          >
            <ClearIcon />
          </ImageListItem>
        </ImageList>
      )}
    </Paper>
  );
});
