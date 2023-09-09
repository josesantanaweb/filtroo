import React from "react";
import { LoaderProvider } from "./contexts/LoaderContext";
import { AppRouter } from "./routers/AppRouter";

export const FiltrooBackofficeApp = () => {
  return (
    <LoaderProvider>
      <AppRouter />
    </LoaderProvider>
  );
};
