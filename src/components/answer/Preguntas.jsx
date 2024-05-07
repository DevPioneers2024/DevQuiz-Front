import '../../sass/preguntas.sass'

import 'react';

function Preguntas() {
    return (
        <section className="Preguntas">
           { /*<header className="Preguntas-title">
                <h1>Answer Race 2024</h1>
              </header>
            */}
            <main className="Preguntas-main">
                <article className="Preguntas-question">
                    <h2 className="Preguntas-questionText">¿Esta sera donde entre la pregunta...?</h2>
                    <form className="Preguntas-answers">

                        <div className="Preguntas-answer">
                            <input type="radio" name="answers" id="opcion1" value="opcion1"/>
                            <label htmlFor='opcion1'>Esta será la primera respuesta</label>
                        </div>

                        <div className="Preguntas-answer">
                            <input type="radio" name="answers" id='opcion2' value="opcion2"/>
                            <label htmlFor='opcion2'>Esta será la segunda respuesta</label>
                        </div>

                        <div className="Preguntas-answer">
                            <input type="radio" name="answers" id='opcion3' value="opcion3"/>
                            <label htmlFor='opcion3'>Esta será la tercera respuesta</label>
                        </div>
                    
                        <div className="Preguntas-answer">
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
