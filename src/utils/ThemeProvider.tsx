"use client"

import { ThemeProvider } from "next-themes";
import React from "react";

interface childrenProps {
  children: React.ReactNode
}

export const ThemeChanger = ({children}: childrenProps) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}