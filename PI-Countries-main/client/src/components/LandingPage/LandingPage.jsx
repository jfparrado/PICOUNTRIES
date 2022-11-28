import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";


export default function LandingPage(){
    return(
        <div className={style.Landingpage} >
            <button className={style.circle}>
            <Link to="/home" className={style.text}>
                HOME
            </Link>
            </button>
        </div>
    )
}
  