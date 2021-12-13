import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";



export const UserContext = createContext()


export const UserContextProvider = ({children})=>{

    const [ register, authenticated ] = useAuth()



    return(
        <UserContext.Provider value={{register, authenticated}}>{children}</UserContext.Provider>


    )
}