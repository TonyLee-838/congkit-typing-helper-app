import React, { createContext } from "react";
import GlobalStateStore from "./globalStateStore";
import KeyStore from "./keyStore";
import ConfigStore from "./configStore";
import SearchStore from "./searchStore";
import MemoStore from "./memoStore";

const globalStateStore = new GlobalStateStore();
const keyStore = new KeyStore();
const configStore = new ConfigStore();
const searchStore = new SearchStore(keyStore);
const memoStore = new MemoStore();

export const GlobalStateContext = createContext(globalStateStore);
export const KeyContext = createContext(keyStore);
export const ConfigContext = createContext(configStore);
export const SearchContext = createContext(searchStore);
export const MemoContext = createContext(memoStore);

const ContextProvider = ({ children }: any) => (
  <GlobalStateContext.Provider value={globalStateStore}>
    <KeyContext.Provider value={keyStore}>
      <ConfigContext.Provider value={configStore}>
        <SearchContext.Provider value={searchStore}>
          <MemoContext.Provider value={memoStore}>
            {children}
          </MemoContext.Provider>
        </SearchContext.Provider>
      </ConfigContext.Provider>
    </KeyContext.Provider>
  </GlobalStateContext.Provider>
);

export default ContextProvider;
