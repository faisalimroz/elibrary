import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import {app} from '../Firebase/firebase.config';
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
const [user,setUser]=useState(null);
const [error, setError] = useState(null);
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
       const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
          .then(() => {
            // Verification email sent successfully
          })
          .catch((err) => {
            setError(err.message);
            throw err;
          })
          .finally(() => setLoading(false));
      };
    
       const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
          .then(() => {
            // Update user object with photoUrl if available
            const updatedUser = auth.currentUser;
    
            // Access the photoUrl from the user object
            const photoUrl = updatedUser.photoURL;
    
            // Optionally, you can also update the local state with the new user object
            setUser(updatedUser);
    
            // Return the updated user object or photoUrl as needed
            return updatedUser;
          })
          .catch((err) => {
            setError(err.message);
            throw err;
          })
          .finally(() => setLoading(false));
      };
    
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        verifyEmail,
        updateUser,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;