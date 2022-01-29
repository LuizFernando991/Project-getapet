import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./contexts/UserContext"
//Routes 
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Mypets } from './pages/Mypets'
import { ShowPet } from './pages/ShowPet'
import { MyAdoptions } from "./pages/MyAdoptions"
//Components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from './components/Container'
import { Message } from './components/Message'
import { CreatePet } from "./pages/CreatePet"
import { EditPet } from "./pages/EditPet"


export const App = ()=>{

    const { authenticated } = useContext(UserContext)

    return(
        <>
                <Navbar/>
                    <Container>
                        <Message/>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>                                
                            <Route path='/register' exact element={<Register/>}/>
                            <Route path= '/pet/:id' element={<ShowPet/>}/>
                            <Route path='/login' exact element={<Login/>}/>
                            {authenticated &&
                                <Route path='/profile' exact element={<Profile/>}/>
                            }
                            {authenticated &&
                                <Route path='/mypets' element={<Mypets/>}/>
                            }
                            {authenticated &&
                                <Route path='/newpet' exact element={<CreatePet/>}/>  
                            }
                            {authenticated &&
                                <Route path='/editpet/:id' element={<EditPet/>}/>  
                            }
                            {authenticated &&
                                <Route path='/myadoptions' element={<MyAdoptions/>}/>  
                            }
                        </Routes>
                    </Container>
                <Footer/>
        </>
)}
