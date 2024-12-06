import { BrowserRouter, Route, Router, Routes } from 'react-router'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='portfolio' element={<Services />}></Route>
          <Route path='about' element={<Services />}></Route>
          <Route path='contact' element={<Services />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
