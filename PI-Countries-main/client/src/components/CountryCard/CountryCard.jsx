import React from "react";
import {Link} from "react-router-dom"
import style from "./CountryCard.module.css";

export default function CountryCard({id, name, image, region}){
    return(
        <section className={style.card}>
            <h3 className={style.titlecard}>
                <Link className={style.title} to={`/home/${id}` }> 
                {name} 
                </Link>
            </h3>
            
            <p className={style.activities}><b className={style.text}>Continent</b> {`: ${region}` }</p>
            <div className={style.contimg}>
            <img src={image} alt="imagen" className={style.imgcard}/>
            </div>
        </section>
    )
}