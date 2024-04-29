import Button from '../../utils/Button'
import style from '../../sass/Card.module.sass'

const Card = ({ titulo, cantidad }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <h1>Sala: {titulo}</h1>
        <p>Nro Jugadores: {cantidad}</p>
        <Button titulo='Jugar' />
      </div>
    </>
  )
}

export default Card
