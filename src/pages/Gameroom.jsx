import Preguntas from "../components/answer/Preguntas"
import Navtitle from '../components/Navtitle/Navtitle'
import Players from '../components/Players/Players'
import style from '../sass/Gameroom.module.sass'
import {Button} from "../utils/Button"

const Gameroom = () => {
  return (
    <div className={style.container}>
      <h1>Answer Race 2024</h1>

      <section className={style.cont_preguntas}>
        <div className={style.questions}>
          < Preguntas />
        </div>
        <div className={style.sidebar}>
          <Navtitle />
          <Players />
        </div>
      </section>

      <aside>
        <p>Tiempo restante: 00:00</p>
        <p>Pregunta: 1/5</p>
      </aside>

      <footer>
        <Button titulo='Jugar De Nuevo' />
        <Button titulo='Abandonar' />
      </footer>
    </div>
  )
}

export { Gameroom }