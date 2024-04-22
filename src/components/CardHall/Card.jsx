import Button from '../../utils/Button'
import './Card.sass'

const Card = ({titulo, cantidad}) => {
  return (
    <>
        <div className="card-container">
            <h1>Sala: {titulo}</h1>
            <p>Nro Jugadores: {cantidad}</p>
            <Button titulo="Jugar"/>
        </div>
    </>
  )
}

export default Card