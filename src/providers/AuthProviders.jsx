import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";




// creating context
export const AuthContext = createContext(null)

// google provider
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    
    //initial states
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();


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





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])


     
    // values
    const authInfo= { user,loading,createUser, signIn,logOut,googleLogIn    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;