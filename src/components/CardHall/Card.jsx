import { Button } from '../../utils/Button'
import style from '../../sass/Card.module.sass'

const Card = ({ titulo, cantidad, usuario }) => {
  return (
    <div className={style.cardContainer}>
      <h1>Sala: {titulo}</h1>
      <p>Nro Jugadores: {cantidad}</p>
      <p>Usuario: {usuario}</p>
      <Button titulo='Unirse' />
    </div>
  )
}

export default Card
