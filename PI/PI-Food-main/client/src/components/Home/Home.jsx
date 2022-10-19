import React from "react";
import{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux"; //esto permite conectarse con la DB
//el use slector es el map state to props
//el  use dispatch permite hacer ddispatch directamente
import { getAllRecipes } from "../../actions";
// import {Link} from "react-router-dom"
import Paginado from "../Paginado/Paginado"
import RecipeCard from "../RecipeCard/RecipeCard"
import "./Home.css"

export default function Home(){//props recibe la info que le llegue y se usa props.info
    const dispatch =useDispatch()
    const allRecipes =  useSelector((state)=>state?.recipes)//en la const va a venir todo lo que esta en estado de recipes
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getAllRecipes()) // el dispatch permite usar las funciones y en este caso se va a traer todas las recipies
    },[dispatch])// el array de dependencias. cuando lo que este aca dentro se modifique es use effect se va a volver a actualizar
    return(
        <div>
            <select name="" id="">
                <option value="asc">Ascendent</option>
                <option value="desc">Descendent</option>
                <option value="heal">Health Score</option>
            </select>
        <h1>Estoy en home</h1>
                <article>
                {allRecipes?.map((recipe)=>{
                    return (
                        <div className="card">
                            <RecipeCard
                            key={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            diets={recipe.diets}
                            />
                        </div>
                    )
                })}
                <Paginado/>
            </article>
        </div>
    )
}