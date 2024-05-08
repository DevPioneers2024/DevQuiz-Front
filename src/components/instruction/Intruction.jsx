import style from '../../sass/intruction.module.sass'

export const Intruction = () => {
  return (
    <section className={style.text}>
      <h2>
        Instrucciones para el Juego de Trivia con 2 ó un máximo de 4 Jugadores
      </h2>
      <h3>Dinámica del Juego:</h3>
      <ul>
        <li>
          <p>
            Cada jugador tendrá la oportunidad de responder a una pregunta en un
            tiempo determinado, por ejemplo, 20 segundos.
          </p>
        </li>
        <li>
          <p>
            Los puntos obtenidos por acertar una pregunta dependerán del tiempo
            de respuesta. El jugador que responda correctamente en el menor
            tiempo posible recibe el 100% del puntaje, mientras que los otros
            jugadores que respondan correctamente en un tiempo menor al jugador
            que se llevó el 100% recibirán un puntaje proporcional al tiempo
            acertado.
          </p>
        </li>
        <li>
          <p>
            Si un jugador no responde correctamente o excede el tiempo asignado,
            no gana puntos.
          </p>
        </li>
      </ul>
      <h3>Determinación del Ganador:</h3>
      <ul>
        <li>
          <p>
            Al final de las 5 preguntas, se suman los puntos obtenidos por cada
            jugador.
          </p>
        </li>
        <li>
          <p>
            El jugador con la mayor cantidad de puntos al final de las 5
            preguntas es el ganador del juego.
          </p>
        </li>
      </ul>
    </section>
  )
}
