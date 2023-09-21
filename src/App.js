import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Menu from './Component/Menu'
import Home from './Component/Home'
import Ex1 from './Component/Ex1'
import Ex2 from './Component/Ex2'
import Pnf from './Component/Pnf'
import Search from './Screens/Search'

function App(props) {
  return (
    <BrowserRouter>
         <Menu/>
         <Routes>
             <Route path={`/`} element={<Home/>}/>
             <Route path={`/ex1`} element={<Ex1/>}/>
             <Route path={`/ex2`} element={<Ex2/>}/>
             <Route path={`/*`} element={<Pnf/>}/>
         </Routes>
    </BrowserRouter>
  )
}

export default App
