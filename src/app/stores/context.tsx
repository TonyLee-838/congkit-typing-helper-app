import React, { createContext } from "react";
import { GlobalStateStore } from "./globalStateStore";
import { KeyStore } from "./keyStore";
import { ConfigStore } from "./configStore";
import { SearchStore } from "./searchStore";

const globalStateStore = new GlobalStateStore();
const keyStore = new KeyStore();
const configStore = new ConfigStore();
const searchStore = new SearchStore(keyStore);

export const GlobalStateContext = createContext(globalStateStore);
export const KeyContext = createContext(keyStore);
export const ConfigContext = createContext(configStore);
export const SearchContext = createContext(searchStore);

const ContextProvider = ({ children }: any) => (
  <GlobalStateContext.Provider value={globalStateStore}>
    <KeyContext.Provider value={keyStore}>
      <ConfigContext.Provider value={configStore}>
        <SearchContext.Provider value={searchStore}>
          {children}
        </SearchContext.Provider>
      </ConfigContext.Provider>
    </KeyContext.Provider>
  </GlobalStateContext.Provider>
);

export default ContextProvider;
