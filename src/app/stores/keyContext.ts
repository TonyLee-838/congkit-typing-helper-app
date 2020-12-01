import { createContext } from "react";
import { KeyStore } from "./keyStore";

export const KeyContext = createContext(new KeyStore());
