// import app from "@/firebase/firebase.config";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";

// const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export default auth;
import app from "@/firebase/firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export default auth;
