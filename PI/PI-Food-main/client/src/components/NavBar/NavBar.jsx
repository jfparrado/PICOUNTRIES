import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import "./NavBar.css";

export default function Home(){
    return(
        <header>
            <ul id="links">
                <li>
            <Link to="/home">Home</Link>
                </li>
                <li>
            <Link to="/create_recipes">Create Recipe</Link> 
                </li>
            </ul>
            <h2>Juan`s Recipes</h2>
            <SearchBar/>
        </header>
    )
}