import {createContext,  useCallback,  useMemo,  useState } from 'react';

export const AuthContext= createContext();


export const AuthProvider= ({children})=> {

    const MY_LOCAL_NAME='IS_LOGGED';
    const initialState = localStorage.getItem(MY_LOCAL_NAME ?? false); 

    const [isLogged, setIsLogged]=useState(initialState);


    const Login= useCallback(
    () => {
        console.log(localStorage.setItem(MY_LOCAL_NAME, 'true' ));
        setIsLogged(true);
    },
    [],)


    const Logout= useCallback(
        () => {
            console.log(localStorage.removeItem(MY_LOCAL_NAME ));
            setIsLogged(false);
        },
        [],);


        const data= useMemo(() => ({Login, Logout, isLogged}),
         [Login, Logout, isLogged ])


        return(
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        )
}