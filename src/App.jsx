import { Home } from './pages/Home'
import { Gameroom } from './pages/Gameroom';
import { WaitRooms } from './pages/WaitRooms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/room/:id' element={<WaitRooms />} />
        <Route path='/Gameroon' element={<Gameroom />} />
      </Routes>
    </Router>
  )
}

export default App
