import React from "react";
// import { useState, useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { getAllRecipes } from "../../actions";
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


export default function Home(){
    // const dispatch =useDispatch()
    // const allRecipes = useSelector((state)=>state.recipes)//en la const va a venir todo lo que esta en estado de characterki
    // useEffect(()=>{//permite acceder al store
    //     dispatch(getAllRecipes())//actualiza el atributo
    // },[])// lo que va dentro del array es de lo que depende el compoenente did mount
    return(
        <div>
            <h1>ESTOY EN NAVBAR</h1>
            <ul>
                <li>
            <Link to="/home">Home</Link>
                </li>
                <li>
            <Link to="/create_recipes">Create Recipe</Link> 
                </li>
            </ul>
            <h1>Henry Food</h1>
            <SearchBar/>
        </div>
    )
}