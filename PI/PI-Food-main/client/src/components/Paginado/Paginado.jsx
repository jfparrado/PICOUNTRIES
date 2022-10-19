import React from "react";
import "./Paginado.css"

export default function Paginado({recipesPerPage,numberOfRecipes, paginado}){
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(numberOfRecipes/recipesPerPage);i++)//desde i hasta la cantidad de paginas
    {
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="allpages">
                {pageNumbers&&pageNumbers.map(number=>( // para cado uno de los numeros de pagina
                <li className="pagenumber" key={number}>
                    <a onClick={()=>paginado(number)}>{number}</a>
                </li>
                ))}
            </ul>

        </nav>
    )
}