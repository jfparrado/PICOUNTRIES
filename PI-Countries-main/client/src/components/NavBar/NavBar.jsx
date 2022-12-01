import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css";

export default function Home(){
    return(
        <header className={style.sticky}>
            <ul className={style.links}>
                <li key="home" >
            <Link className={style.text} to="/home">Home</Link>
                </li>
                <li key="create_activities" >
            <Link className={style.text} to="/create_activities">Create Activities</Link> 
                </li>
            </ul>
            <h2 className={style.title}>World</h2>
            <SearchBar/>
        </header>
    )
}