import React from "react";
import style from './Gameover.module.css'
import {Link} from 'react-router-dom'
import music from '../Assets/gameover.mp3'


const Gameover = () => {
    return (  
        <>  <div className={style.container}>
        <h1 className={style.titulo}>¡¡¡GAME OVER!!!</h1>
         <div className={style.containerImg}>
         <div className={style.img}></div>
        
         </div>
         <div className={style.buttonContainer}>
         <Link to ='/'>VOLVER</Link>
         </div>

     
         </div>
         <audio src={music} autoPlay></audio>
    </>

    );
}
 
export default Gameover;