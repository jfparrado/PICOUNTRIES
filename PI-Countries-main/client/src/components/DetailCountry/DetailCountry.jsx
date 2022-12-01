import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountriesById} from "../../actions/index"
import { useEffect }from "react";
import { useParams } from 'react-router-dom';
import style from "./DetailCountry.module.css"

export default function  DetailCountry(){
    const { id } = useParams();
    const dispatch =useDispatch()
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getCountriesById(id)) 
    },[dispatch,id])
    const oneCountry =  useSelector((state)=>state?.countryDetail)
    // if(typeof(id)!=="string"){
    //     id=id.toString();
    // }
    const loadingImg="https://zonavalue.com/wp-content/themes/kauplus/img/loading.gif";
    // const variable=oneCountry[0].id;
    // console.log("el id recibido es:", typeof id)
    // console.log("oneCountry[0].id es:", typeof oneCountry)
    return(
        <div className={style.mainContainer}>
            {oneCountry.length>0 && oneCountry[0].cca3===id? //esto es pa que cuando no haya nada se muestre un loading
            // && oneCountry[0].id.toString()===id
            <div className={style.containerContent}>
                <h3 className={style.title}>{oneCountry[0].name}</h3>
                <div className={style.info}>
                    <div className={style.left}>
                        <img className={style.flag} src={oneCountry[0].flags} alt="flag"/>
                    </div>
                    <div className={style.right}>
                        <div>
                        <p className={style.content}> <b>Code: </b> {oneCountry[0].cca3}</p></div>
                        <div>
                        <p className={style.content}> <b>Continent: </b> {oneCountry[0].region}</p></div>
                        <div>
                        <p className={style.content}> <b>Capital: </b> 
                            {oneCountry[0].capital.length<=1?
                            oneCountry[0].capital[0]:
                            oneCountry[0].capital.join(", ")}</p>
                        </div>
                        <div>
                        <p className={style.content}> <b>Subregion: </b>{oneCountry[0].subregion}</p></div>
                        <div>
                        <p className={style.content}> <b>Area: </b>{oneCountry[0].area}</p></div>
                        <div>
                        <p className={style.content}> <b>Population: </b>  {oneCountry[0].population}</p></div>
                        <div>
                        <p className={style.content}><b>Touristic activities: </b> 
                            {
                                oneCountry[0].activities.length!==0?
                                oneCountry[0].activities.map((activity)=>activity.name+(" ")):
                                "No activities"
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
                :<div className={style.containerImg}>
                    <img src={loadingImg} alt="loading" className={style.loading}/>
                </div> 
                }
        </div>
    )
}