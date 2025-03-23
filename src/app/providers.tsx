"use client";

import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "./components/ui/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
}
