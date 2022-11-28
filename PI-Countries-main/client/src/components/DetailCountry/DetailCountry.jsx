import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRecipesById} from "../../actions/index"
import { useEffect }from "react";
import { useParams } from 'react-router-dom';
import style from "./DetailRecipe.module.css"

export default function  DetailRecipe(){
    const { id } = useParams();
    const dispatch =useDispatch()
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getRecipesById(id)) 
    },[dispatch])
    const oneRecipe =  useSelector((state)=>state?.recipeDetail)
    // if(typeof(id)!=="string"){
    //     id=id.toString();
    // }
    const loadingImg="https://zonavalue.com/wp-content/themes/kauplus/img/loading.gif";
    // const variable=oneRecipe[0].id;
    // console.log("el id recibido es:", typeof id)
    // console.log("oneRecipe[0].id es:", typeof oneRecipe)
    return(
        <div>
            {/* {console.log("llea:",  oneRecipe)} */}
            {oneRecipe.length>0 && oneRecipe[0].id.toString()===id? //esto es pa que cuando no haya nada se muestre un loading
            
            // && oneRecipe[0].id.toString()===id
            <div className={style.containerContent}>

                <h3>{oneRecipe[0].name}</h3>
                <div className={style.allInfo}>
                    <div className={style.upperInfo}>
                    <div className={style.shortInfo}>
                        <img className={style.mainImage} src={oneRecipe[0].image} alt="imageof the recipe"/>
                        <div className={style.information}>
                            <b>Dishes:</b> <p className={style.content}>{oneRecipe[0].dishTypes+(", ")}</p>
                        </div>
                        <div className={style.information}>
                            <b>Diets:</b> <p className={style.content}>
                                {
                                oneRecipe[0].createdInDb===true?
                                oneRecipe[0].diets.map((diet)=>diet.name+(", ")):
                                oneRecipe[0].diets.join(", ")
                            }
                            </p>
                            <div className={style.information}>
                                <b>Health Score:</b> <p className={style.content}>{oneRecipe[0].healthScore}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.information }>
                            <p className={style.longTextUp}><b>Summary:</b> {oneRecipe[0].summary}</p>
                    </div>
                    </div>
                    <div className={style.informationDown}>
                        <p className={ style.longTextDown}><b>Steps: </b>{oneRecipe[0].steps}</p>
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