import { BrowserRouter, Routes, Route } from "react-router-dom"



//Routes 

import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'


//Components

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from './components/Container'
import { Message } from './components/Message'



export const App = ()=>{



    return(

        <>

            <BrowserRouter>
                <Navbar/>
                    <Container>
                        <Message/>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>
                                
                            <Route path='/register' exact element={<Register/>}/>

                            <Route path='/login' exact element={<Login/>}/>

                        </Routes>

                    </Container>
                <Footer/>
            </BrowserRouter>
        </>



    )

}
