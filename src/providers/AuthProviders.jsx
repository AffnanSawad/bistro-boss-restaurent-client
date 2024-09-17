import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";




// creating context
export const AuthContext = createContext(null)

// google provider
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    
    //initial states
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    // new user
    const createUser = (email,password)=> {
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }


    //  sign In = login
    const signIn = (email,password)=> {
           
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout
    const logOut = ()=> {
          
        setLoading(true)
        return signOut(auth);
    }


    // google sign in
    const googleLogIn = () =>{
        
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }





    // onAuthstateChange
    useEffect( 
        ()=>{

         const unSubscribe=onAuthStateChanged( auth , currentUser =>{
           
            setUser(currentUser);
            console.log('observing', currentUser);
            
            // must be
            setLoading(false);


         }  );
        
        //  imp
         return()=>{
            unSubscribe()
         }



        }
        
        ,[])


     
    // values
    const authInfo= { user,loading,createUser, signIn,logOut,googleLogIn    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;