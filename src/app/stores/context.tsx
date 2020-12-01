import React, { createContext } from "react";
import { GlobalStateStore } from "./globalStateStore";
import { KeyStore } from "./keyStore";
import { ConfigStore } from "./configStore";

export const GlobalStateContext = createContext(new GlobalStateStore());
export const KeyContext = createContext(new KeyStore());
export const ConfigContext = createContext(new ConfigStore());

const ContextProvider = ({ children }: any) => (
  <GlobalStateContext.Provider value={new GlobalStateStore()}>
    <KeyContext.Provider value={new KeyStore()}>
      <ConfigContext.Provider value={new ConfigStore()}>
        {children}
      </ConfigContext.Provider>
    </KeyContext.Provider>
  </GlobalStateContext.Provider>
);

export default ContextProvider;
