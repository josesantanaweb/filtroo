import React, { createContext, useContext, useState } from "react";
import store from "store";
import LoaderTop from "../components/LoaderTop";

type context = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};
const LoaderContext = createContext({} as context);

export const LoaderProvider = (props: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const context = {
    loading,
    setLoading,
  };

  return (
    <LoaderContext.Provider value={context}>
      {loading ? <LoaderTop /> : null}
      {props.children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
