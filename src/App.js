import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Container from './components/Container'
import background from './images/background.png'
import './App.css'
const App = () => {
  return (
    <div className="containerPage">
      <img className="containerBackground" src={background} alt="Bacground Img" />
      <Routes>
        <Route path='/' element={<Container/>}/>
      </Routes>
    </div>
  )
}

export default App
