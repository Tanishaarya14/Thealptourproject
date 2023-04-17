import { useState } from 'react'
import Flownavbar from './components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import Departments from './Pages/services'
import Contact from './Pages/contact'
import Pricing from './Pages/pricing'
import explore from './Pages/explore'
import Flowfooter from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (<>
  
    <BrowserRouter>
    <Flownavbar></Flownavbar>
    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/departments" element={<Departments/>}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/pricing" element={<Pricing />}></Route>
    <Route path="/explore"  element={<explore/>}></Route>
    </Routes>
    
    </BrowserRouter>

    <Flowfooter></Flowfooter>
    </>)
}

export default App
