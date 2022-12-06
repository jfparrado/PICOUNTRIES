import React from "react";
import {Link} from "react-router-dom"
import style from "./CountryCard.module.css";
import { deleteCountryById, getAllCountries} from "../../actions";
import {useDispatch} from "react-redux";

export default function CountryCard({id, name, image, region}){
    const dispatch =useDispatch()
    function deleteCountry(event,id){
        event.preventDefault();
        dispatch(deleteCountryById(id))
        alert("the country was deleted succesfully")
        dispatch(getAllCountries()) 
    }
    return(
        <section className={style.card}>
            <h3 className={style.titlecard}>
                <Link className={style.title} to={`/home/${id}` }> 
                {name} 
                </Link> 
            </h3>
            
            <p className={style.activities}><b className={style.text}>Continent</b> {`: ${region}` }</p>
            <div className={style.contimg}>
            <img src={image} alt="imagen" className={style.imgcard}/>
            </div>
            <button className={style.buttons} onClick={(event)=>deleteCountry(event,id)}>Delete country</button>
        </section>
    )
}