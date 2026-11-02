"use client";
import { ReactNode } from "react";

type CustomCursorProviderProps = {
  children: ReactNode;
  bgColor?: string;
};

export default function CursorAndBackgroundProvider({ children }: CustomCursorProviderProps) {
  return <>{children}</>;
}