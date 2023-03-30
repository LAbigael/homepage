"use client";

import { useState } from "react";

import { LangContext } from "./LangContext";
import { ThemeContext } from "./ThemeContext";

import "../styles/globals.css";
import "../styles/app.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  const [lang, setLang] = useState("fr");
  const langValue = { lang, setLang };

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <LangContext.Provider value={langValue}>
        <ThemeContext.Provider value={"light"}>
          <body className="max-w-xl mx-auto bg-rosePineDawn-base">
            {children}
          </body>
        </ThemeContext.Provider>
      </LangContext.Provider>
    </html>
  );
}
