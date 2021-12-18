import { Routes, Route } from "react-router-dom"



//Routes 

import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Mypets } from './pages/Mypets'


//Components

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from './components/Container'
import { Message } from './components/Message'
import { CreatePet } from "./pages/CreatePet"



export const App = ()=>{



    return(

        <>

            
                <Navbar/>
                    <Container>
                        <Message/>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>
                                
                            <Route path='/register' exact element={<Register/>}/>

                            <Route path='/login' exact element={<Login/>}/>

                            <Route path='/profile' exact element={<Profile/>}/>

                            <Route path='/mypets' exact element={<Mypets/>}/>

                            <Route path='/newpet' exact element={<CreatePet/>}/>


                        </Routes>

                    </Container>
                <Footer/>
            
        </>



    )

}
