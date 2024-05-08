import {
  BrowserRouter as Router,
  Routes as Rutas,
  Route as Ruta 
}from 'react-router-dom';

import { Home } from './pages/Home'
import { Gameroom } from './pages/Gameroom';
import { WaitRooms } from './pages/WaitRooms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WaitRooms } from './pages/WaitRooms'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/room/:id' element={<WaitRooms />} />
      </Routes>
    </Router>
  )
}

export default App
