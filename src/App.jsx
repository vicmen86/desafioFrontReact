import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CreateProduct from './components/CreateProduct'
import Stock from './components/Stock'
import DetailProduct from './components/DetailProduct'
import './App.css'

function App() {
  

  return (
    
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreateProduct/>}></Route>
        <Route path='/stock' element={<Stock/>}></Route>
        <Route exact path='/:id' component={DetailProduct}/>
      </Routes>
    </div>
    
  )
}

export default App
