import { Home } from './pages/Home'
import { Gameroom } from '../src/pages/Gameroom';
import { WaitRooms } from '../src/pages/WaitRooms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/room/:id' element={<WaitRooms />} />
        <Route path='/Gameroom' element={<Gameroom />} />
        {/*<Route path='/Gameroon' element={<Gameroom />} />*/}
      </Routes>
    </Router>
  )
}

export default App
