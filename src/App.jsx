import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.sass'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import Footer from './Components/Footer/Footer'
import Palette from './Components/Palette/Palette'
import ScrollToTop from './ScrollToTop'
import Gradient from './Components/Gradient/Gradient'
import NotFound from './Components/NotFound/NotFound'
import Lorem from './Components/Lorem/Lorem'
import PaletteFromImage from './Components/PaletteFromImage/PaletteFromImage'
import ColorPicker from './Components/ColorPicker/ColorPicker'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Routes>
            <Route exact path="/" element = {<MainSection />}/>
            <Route exact path="/Palette" element = {<Palette />}/>
            <Route exact path="/Gradient" element = {<Gradient />}/>
            <Route exact path="/LoremIpsum" element = {<Lorem />}/>
            <Route exact path="/PaletteFromImage" element = {<PaletteFromImage />}/>
            <Route exact path="/ColorPicker" element = {<ColorPicker />}/>
            <Route exact path="*" element = {<NotFound />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}