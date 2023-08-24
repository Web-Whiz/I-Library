"use client"
import React from "react";
import AuthProviders from "./AuthProviders";
import QueryProvider from "./QueryProvider";

const Providers = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProviders>
        {children}
      </AuthProviders>
    </QueryProvider>
  );
};

export default Providers;
