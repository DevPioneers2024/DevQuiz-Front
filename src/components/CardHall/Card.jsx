export const Card = ({ titulo, cantidad, usuario, style }) => {
  return (
    <div className={style}>
      <h1>Sala: {titulo}</h1>
      <p>Nro Jugadores: {cantidad}</p>
      <p>Usuario: {usuario}</p>
    </div>
  )
}
