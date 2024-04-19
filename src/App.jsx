import './App.sass'
import Card from './components/Card'
import Button from './utils/Button'

function App() {
  return (
    <>
      <h1>hello world</h1>
      <div className='container'>
        <Card titulo="Ganadores" cantidad="3"/>
        <Card titulo="Principiantes" cantidad="2"/>
        <Card titulo="Los Ultimos" cantidad="4"/>
        <Card titulo="Los Malos" cantidad="2"/>
        <Button titulo = "Inicia Partida"/>
      </div>
      
     
    </>
  )
}

export default App
