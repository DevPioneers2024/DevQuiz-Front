import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.sass'
import Card from './components/Card'
import Button from './utils/Button'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button titulo = "Inicia Partida"/>
    <div className='container'>
        <Card titulo="Ganadores" cantidad="3"/>
        <Card titulo="Principiantes" cantidad="2"/>
        <Card titulo="Los Ultimos" cantidad="4"/>
        <Card titulo="Los Malos" cantidad="2"/>
        
      </div>
  </React.StrictMode>
)
