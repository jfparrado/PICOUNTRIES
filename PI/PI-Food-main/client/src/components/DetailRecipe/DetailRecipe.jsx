import React from "react";
import{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRecipesById} from "../../actions/index"
export default function DetailRecipe(props){
    const dispatch =useDispatch()
    const oneRecipe =  useSelector((state)=>state?.recipes)
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getRecipesById(props.match.params.id)) 
    },[dispatch])

    return(
        <div>
            {console.log("las props son:",props )}
            {console.log("la receta traida es:",oneRecipe )}
            <h1>Estoy en detail recipes</h1>
            <h2>name</h2>
            <p>type of dish</p>
            <p>diets</p>
            <p>resumen plato</p>
            <p>health score</p>
            <p>steps</p>
        </div>
    )
}