import '../../sass/preguntas.sass'
import style from '../../sass/Gameroom.module.sass'

import 'react';


function Preguntas() {

    return (
        <section className={style.useranswer}>
            <main className={style.useranswer__main}>
                <article className={style.useranswer__main__question}>
                    <h2 className={style.useranswer__main__questionText}>¿Esta sera donde entre la pregunta...?</h2>
                    <form className={style.useranswer__main__answers}>

                        <div className={style.useranswer__main__answers__answer}>
                            <input type="radio" name="answers" id="opcion1" value="opcion1"/>
                            <label htmlFor='opcion1'>Esta será la primera respuesta</label>
                        </div>

                        <div className={style.useranswer__main__answers__answer}>
                            <input type="radio" name="answers" id='opcion2' value="opcion2"/>
                            <label htmlFor='opcion2'>Esta será la segunda respuesta</label>
                        </div>

                        <div className={style.useranswer__main__answers__answer}>
                            <input type="radio" name="answers" id='opcion3' value="opcion3"/>
                            <label htmlFor='opcion3'>Esta será la tercera respuesta</label>
                        </div>
                    
                        <div className={style.useranswer__main__answers__answer}>
                            <input type="radio" name="answers" id='opcion4'value="opcion4"/>
                            <label htmlFor='opcion4'>Esta será la cuarta respuesta</label>
                        </div>
                    </form>
                </article>
            </main>
        </section>
    )
}

export default Preguntas
