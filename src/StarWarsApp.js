import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { OtroComponente } from './components/OtroComponente'
import { People } from './components/People'

export const StarWarsApp = () => {
  return (
    <BrowserRouter>
        <Header/>   
        <Routes>
        <Route path="/" element={<People />} />
        <Route path="/otrocomponente" element={<OtroComponente />} />
        </Routes>
    </BrowserRouter>
  )
}
