import React from "react";
import {Link} from "react-router-dom"
import "./RecipeCard.css";

export default function RecipeCard({id, name, image, diets}){

    return(
        <section>
            <h2 className="titlecard">
                <Link  to={`/home/${id}` }> 
                {name} 
                </Link>
            </h2>
            <p className="dietas">{diets}</p>
            <img src={image} alt="imagen" className="imgcard"/>
        </section>
    )
}