import { BrowserRouter, Routes, Route } from "react-router-dom"



//Routes 

import { Home } from './pages/Home'


//Components

import { Navbar } from "./components/Navbar"



export const App = ()=>{



    return(

        <>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                        

                </Routes>
            </BrowserRouter>
        </>



    )

}
