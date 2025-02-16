// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react"
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import {app} from "../firebase.config";


// // eslint-disable-next-line react-refresh/only-export-components
// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProviders = ({children}) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//   }

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(email, password);
//   }

//   const signOut = () => {
//     setLoading
//   }

//   useEffect (() => {
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//       console.log(currentUser);
//       setLoading(false);
//     });
//     return () => {
//       return unsubscribe();
//     }
//   }, [])

//   const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn
//   }

//   return (
//     <AuthProviders Value={authInfo}>
//       {children}
//     </AuthProviders>
//   )
// }

// export default AuthProviders

















import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;