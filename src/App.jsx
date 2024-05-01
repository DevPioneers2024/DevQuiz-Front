import {
  BrowserRouter as Router,
  Routes as Rutas,
  Route as Ruta 
}from 'react-router-dom';

import { Home } from './pages/Home'
import { Gameroom } from './pages/Gameroom';
import { WaitRooms } from './pages/WaitRooms';

function App() {
  return (
    <Router>
      <Rutas>
        <Ruta path="/" element = {<Home />} />
        <Ruta path="/Gameroom" element = {<Gameroom />} />
        <Ruta path="/WaitRooms" element = {<WaitRooms />} />
      </Rutas>
    </Router>
    
  )
}

export default App
