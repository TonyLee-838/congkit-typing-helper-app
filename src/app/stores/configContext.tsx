import { createContext } from "react";
import { ConfigStore } from "./configStore";

export const ConfigContext = createContext(new ConfigStore());
