import React ,{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux"; //esto permite conectarse con la DB
//el use slector es el map state to props
//el  use dispatch permite hacer ddispatch directamente
import { getAllRecipes } from "../../actions";
// import {Link} from "react-router-dom"
import Paginado from "../Paginado/Paginado"
import RecipeCard from "../RecipeCard/RecipeCard"

export default function Home(props){//props recibe la info que le llegue y se usa props.info
    const dispatch =useDispatch()
    // const allRecipes = useSelector((state)=>state.recipes)//en la const va a venir todo lo que esta en estado de characterki
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getAllRecipes()) // el dispatch permite usar las funciones y en este caso se va a traer todas las recipies
    },[])// el array de dependencias. cuando lo que este aca dentro se modifique es use effect se va a volver a actualizar
    return(
        <div>
            <h1>Estoy en home</h1>
            <RecipeCard/>
            <Paginado/>
        </div>
    )
}