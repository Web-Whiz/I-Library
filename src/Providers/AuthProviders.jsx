import AuthContext from "@/Context/AuthContext";
import auth, {
  facebookProvider,
  googleProvider,
} from "@/firebase/firebase.auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser && currentUser.email) {
      //   const loggedUser = { email: currentUser.email };
      //   fetch(`${process.env.NEXT_PUBLIC_BaseURL}/jwt`, {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log("jwt response", data);
      //       localStorage.setItem("jwt-access-token", data.token);
      //     });
      // } else {
      //   localStorage.removeItem("jwt-access-token");
      // }
    });

    return () => unsubscribe();
  }, []);
  const authInfo = {
    isMenuOpen,
    setIsMenuOpen,
    user,
    setUser,
    loading,
    setLoading,
    isDashboardOpen,
    setIsDashboardOpen,
    isCartOpen,
    setIsCartOpen,
    createUser,
    Login,
    googleSignIn,
    facebookSignIn,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
