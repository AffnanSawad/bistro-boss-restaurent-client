import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";


// creating context
export const AuthContext = createContext(null)
const auth = getAuth(app);

// rsc
const AuthProvider = ({children}) => {
  
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

   
    // value
    const authInfo = {
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;