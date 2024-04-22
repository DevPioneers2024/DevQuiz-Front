import Card from './Card'
import Button from '../../utils/Button'

const SeccionPartida = () => {
  return (
    <>
      <Button titulo="Jugar"/>
      <div className='container'>
        <Card titulo="Ganadores" cantidad="3"/>
        <Card titulo="Principiantes" cantidad="2"/>
        <Card titulo="Los Ultimos" cantidad="4"/>
        <Card titulo="Los Malos" cantidad="2"/>
      </div>
    </>
  )
}

export default SeccionPartida