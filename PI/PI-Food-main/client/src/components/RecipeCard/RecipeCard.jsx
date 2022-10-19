import React from "react";
import "./RecipeCard.css";

export default function RecipeCard({name, image, diets}){

    return(
        <section>
            <h2>{name}</h2>
            <p>{diets}</p>
            <img src={image} alt="imagen" />
        </section>
    )
}