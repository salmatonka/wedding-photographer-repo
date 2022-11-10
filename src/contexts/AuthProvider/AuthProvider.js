import React from 'react';
import {createContext} from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import {useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';


 export const AuthContext = createContext();
 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()
     
      const [user,setUser] = useState(null);
      const [loading,setLoading] = useState(true);
      
      const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
      }
      const updateName = (name)=>{
        return updateProfile(auth.currentUser,{displayName:name})
      }
      

      const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
      }

     
      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        
        return()=>{
 
            return unsubscribe();
        }

      },[])

      const handleGoogleAdd = () =>{
        // console.log('google handle')
		signInWithPopup(auth,provider)
	
  }
   
  const logout =()=>{
    return signOut(auth)
  }
   


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








