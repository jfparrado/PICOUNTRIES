import React from "react";
import style from "./Paginado.module.css"

export default function Paginado({numberOfCountries, paginado}){
    const pageNumbers=[];
    for(let i=0;i<=Math.ceil(((numberOfCountries-9)/10));i++)//desde i hasta la cantidad de paginas
    {
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className={style.allpages}>
                {pageNumbers&&pageNumbers.map(number=>( // para cado uno de los numeros de pagina
                <li  className={style.pagenumber} key={`id ${number.toString()}`}>
                    <span className={style.numpage} onClick={()=>paginado(number)}>{number+1}</span>
                    {/* esta funcion la recibe del home */}
                </li>
                ))}
            </ul>

        </nav>
    )
}