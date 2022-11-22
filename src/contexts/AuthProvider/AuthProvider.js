import React from 'react';
import {createContext} from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import {useState,useEffect} from 'react'

import { GoogleAuthProvider } from 'firebase/auth';


 export const AuthContext = createContext();
 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()
     
      const [user,setUser] = useState({});
      const [loading,setLoading] = useState(true);
      
      const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
      }
      const updateName = (name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name})
      }
      

      const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      
      const handleGoogleAdd = () =>{
        // console.log('google handle')
        setLoading(true)
       return signInWithPopup(auth,provider)
        
        
      }
      
      const logout =()=>{
        localStorage.removeItem('token');
        setLoading(true)
        return signOut(auth)
      }


      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
            
        });
        return()=>{
  
            return unsubscribe();
        }
  
      },[])
   
     const authInfo ={
       user,
       loading,
       createUser,
       login,
       updateName,
       handleGoogleAdd,
       logout,
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;








