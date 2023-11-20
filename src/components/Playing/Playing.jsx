import React, { useState, useEffect, Fragment } from "react";
import style from "./Playing.module.css"
import { Preguntas } from "../Helpers/BD";
const Playing = () => {
    const [aleatorio, setAleatorio] = useState(Math.round(Math.random() * 100))
    const [vidas, setVidas] = useState(5);
    const [puntuacion, setPuntuacion] = useState(0);
    const [time, setTime] = useState(20);
    const [clase, setClase] = useState([
        style.naturaleza,
        style.cultura,
        style.arte,
        style.deportes,
        style.viajes,
    ])
    const [gameOver,setGameOver]= useState(null);
    useEffect(() => {
        let cuentaAtras = setInterval(() => { time > 0 ? setTime(time - 1) : setGameOver(window.location.href = '/gameover') }
        ,1000)
        return ()=>clearInterval(cuentaAtras)
    }, [time, puntuacion])

    const bien = () => {
      speechSynthesis.speak(new SpeechSynthesisUtterance('!!! Respuesta CORRECTA !!!'))
     setAleatorio(Math.round(Math.random()*100))
     setPuntuacion(puntuacion+1);
     setTime(20);
    }
    const mal = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance('!!! Respuesta INCORRECTA !!!'))
     setAleatorio(Math.round(Math.random()*100))
        setPuntuacion(puntuacion -1);
        setVidas(vidas>0? vidas-1:setGameOver(window.location.href='/gameover'))
         setTime(20);
    }
    return (
        <>
            {Preguntas.map(preguntas => (preguntas.id === aleatorio ?
                <Fragment key={preguntas.id}>
                    <div className={style.countContainer}>

                        <h2>Time:{time}</h2>
                        <h2>Points:{puntuacion}</h2>
                        <h2>Life:{vidas}</h2>
                    </div>
                    <div className={style.imgContainer}>
                        <div className={preguntas.estilos === 'naturaleza' ? clase[0] :
                            preguntas.estilos === 'arte' ? clase[2] :
                                preguntas.estilos === 'deportes' ? clase[3] :
                                    preguntas.estilos === 'viajes' ? clase[4] :
                                        preguntas.estilos === 'cultura' ? clase[1] : clase[4]}>

                        </div>
                    </div>
                    <div className={style.preguntasContainer}>
                        <h3>{preguntas.pregunta}</h3>
                    </div>
                    <div className={style.containerButtons}>
                        <button  className={style.boton} onClick={() => preguntas.respuesta1 === preguntas.solucion ? bien() : mal()}>
                            {preguntas.respuesta1}
                        </button>
                        <button  className={style.boton} onClick={() => preguntas.respuesta2 === preguntas.solucion ? bien() : mal()}>
                            {preguntas.respuesta2}
                        </button>
                        <button  className={style.boton} onClick={() => preguntas.respuesta3 === preguntas.solucion ? bien() : mal()}>
                            {preguntas.respuesta3}
                        </button>
                    </div>

                </Fragment> :
                null
            ))}
        </>
    );
}

export default Playing;