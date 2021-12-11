import { BrowserRouter, Routes, Route } from "react-router-dom"



//Routes 

import { Home } from './pages/Home'


//Components

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from './components/Container'



export const App = ()=>{



    return(

        <>

            <BrowserRouter>
                <Navbar/>
                    <Container>
                    <Routes>
                        <Route path='/' exact element={<Home/>}/>
                            

                    </Routes>

                    </Container>
                <Footer/>
            </BrowserRouter>
        </>



    )

}
