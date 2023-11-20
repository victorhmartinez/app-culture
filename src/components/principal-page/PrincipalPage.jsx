import React from "react";
import style from "./PrincipalPage.module.css"
import img from "./Yin_yang.svg.png"
const PrincipalPage = () => {
    return (<>
        <div className={style.container}>
        <h1 className={style.titulo}>Culture Play</h1>
        <img className={style.imagen} src={img} alt="imagen" width="50%" />
        </div>
    </>);
}

export default PrincipalPage;