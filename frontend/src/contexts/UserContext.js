import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";



export const UserContext = createContext()


export const UserContextProvider = ({children})=>{

    const { register } = useAuth()



    return(
        <UserContext.Provider value={{register}}>{children}</UserContext.Provider>


    )
}