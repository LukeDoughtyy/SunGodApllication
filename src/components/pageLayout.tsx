import {
  InputLabel,
  Paper,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { ImageViewer } from "./imageViewer";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { useRootStore } from "../main";

export interface PageLayoutProps {}

/**
 *
 * Base Layout of MVP
 * 
 * Uses Material UI paper at lowest elevation for page layout
 * 
 * Component spacing can be balanced using styles here
 *
 */

export const PageLayout: FC<PageLayoutProps> = observer(() => {
  const { imageDataStore } = useRootStore();
  const [selectedLensImageName, setSelectedLensImageName] = useState<string>();

  const lensImages = imageDataStore.getLensImagesForCurrentNaked();
  const lensImagesArray = [];
  if (lensImages) {
    for (const lensImage in lensImages) {
      lensImagesArray.push(lensImage);
    }
  }

  return (
    <Paper elevation={0}>
      <div style={{ width: "100%", display: "flex", height: "100%" }}>
        <Box sx={{ minWidth: 220, width: "30%" }}>
          <FormControl fullWidth>
            <InputLabel id="lens-input">Lens</InputLabel>
            <Select
              labelId="lens-input-label"
              id="lens-select"
              value={selectedLensImageName}
              label="Lens"
              onChange={(image) => {
                imageDataStore.setSelectedLensImage(image.target.value);
                setSelectedLensImageName(image.target.value);
              }}
            >
              {lensImagesArray.map((lensId, index) => (
                <MenuItem key={"key-" + index} value={lensId}>
                  {lensId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div style={{ width: "56%" }}></div>
        <ImageViewer />
      </div>
    </Paper>
  );
});
