import "./App.scss";
import { PageLayout } from "./components/pageLayout";
import CircularProgress from "@mui/material/CircularProgress";
import { observer } from "mobx-react-lite";
import { useRootStore } from "./main";
import { useState } from "react";

export const App = observer(function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  setTimeout(() => setLoadingScreen(false), 1000);

  const { imageDataStore, productDataStore } = useRootStore();

  if (
    loadingScreen ||
    imageDataStore.imageData === undefined ||
    productDataStore.productData === undefined
  ) {
    return <CircularProgress />;
  } else
    return (
      <>
        <PageLayout />
      </>
    );
});
