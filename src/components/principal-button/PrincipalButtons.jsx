import React from "react";
import style from "./PrincipalButton.module.css"
import { Link } from "react-router-dom";
const PrincipalButtons = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.containerEnlace}>
                <Link to='/' className={style.a}>Instrucciones</Link>
                </div>
                <div className={style.containerEnlace}>
                <Link to='/playing' className={style.a}>Play</Link>
                </div>

            </div>
        </>
    );
}

export default PrincipalButtons;