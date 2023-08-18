"use client";
import app from "@/firebase/firebase.config";
import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const authInfo = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
