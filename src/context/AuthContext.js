import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const registerUser = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setLoading(true);
            setUserToken("GandStoken");
            setLoading(false);
        } else {
            Alert.alert("", "Please Fill Username and Password.", "")
        }
    }

    const loginUser = (username, password) => {

        if (username === 'admin' && password === 'admin') {
            setLoading(true);
            setUserToken("GandStoken");
            setLoading(false);
        } else {
            if (username && password) {
                Alert.alert("", "Username and Password mismatch.", "")
            } else {
                Alert.alert("", "Please Fill Username and Password.", "")
            }
        }
    }

    const logoutUser = () => {
        setLoading(true);
        setUserToken(null);
        setLoading(false);
    }

    useEffect(() => {
        // async function getLoggedIn(params) {
        //     setLoading(true);
        //     setUserToken(userToken);
        //     setLoading(false);
        // }
        // getLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, registerUser, loading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}