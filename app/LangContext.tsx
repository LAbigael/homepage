"use client";

import { createContext } from "react";

export interface LangContextType {
  lang: string;
  setLang: (value: string) => void;
}

export const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
});
