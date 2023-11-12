import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../Firebase/firebase.config';
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
const [user,setUser]=useState(null);
    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data=>{
                    console.log(data.data.token)
                    
                    console.log('current user',currentUser)
                    localStorage.setItem('access-token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
           })
           return ()=>{
            return unsubscribe()
           }
       })
    
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;