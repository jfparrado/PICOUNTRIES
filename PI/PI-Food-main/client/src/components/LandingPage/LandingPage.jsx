import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


export default function LandingPage(){
    return(
        <div>
            <h1>
            Check all our recipies
            </h1>
            <button>
            <Link to="/home">
                HOME
            </Link>
            </button>
        </div>
    )
}
  