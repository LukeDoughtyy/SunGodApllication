import React from "react";
import { createContext, ReactNode, useContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { RootStore } from "./stores/root.store";

// holds a reference to the store (singleton)
let store: RootStore;

// create the context
const StoreContext = createContext<RootStore | undefined>(undefined);

// create the provider component
function RootStoreProvider({ children }: { children: ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

// create the hook
export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>
);
