import AuthContext from "@/Context/AuthContext";
import { useState } from "react";

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  
  // const createUser = (email, password) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const Login = (email, password) => {
  //   setLoading(true);
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // const googleSignIn = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, googleProvider);
  // };

  // const logOut = () => {
  //   setLoading(true);
  //   return signOut(auth);
  // };

  // const updateUserProfile = async(name, photo) => {
  //   setLoading(true);
  //   await updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  //   setUser((prevUser) => ({ ...prevUser, ...{ name, photo } }));
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);
  const authInfo = {
    isMenuOpen,
    setIsMenuOpen,
    user,
    setUser,
    loading,
    setLoading,
    // createUser,
    // Login,
    // googleSignIn,
    // logOut,
    // updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
