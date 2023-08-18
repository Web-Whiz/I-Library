"use client"
import React from "react";
import AuthProviders from "./AuthProviders";

const Providers = ({ children }) => {
  return <AuthProviders>{children}</AuthProviders>;
};

export default Providers;
