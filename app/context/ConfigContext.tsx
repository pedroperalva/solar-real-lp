"use client";

import React from "react";

export const ConfigContext = React.createContext<Record<string, any> | null>(
  null
);

export function ConfigProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Record<string, any> | null;
}) {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
