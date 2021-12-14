import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";



export const UserContext = createContext()


export const UserContextProvider = ({children})=>{

    const [ register, logout, authenticated ] = useAuth()





    return(
        <UserContext.Provider value={{register, logout, authenticated}}>{children}</UserContext.Provider>


    )
}