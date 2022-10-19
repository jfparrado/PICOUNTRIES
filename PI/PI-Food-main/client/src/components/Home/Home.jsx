import React from "react";
import{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux"; //esto permite conectarse con la DB
//el use slector es el map state to props
//el  use dispatch permite hacer ddispatch directamente
import { getAllRecipes } from "../../actions";
// import {Link} from "react-router-dom"
import Paginado from "../Paginado/Paginado"
import RecipeCard from "../RecipeCard/RecipeCard"
import "./Home.css"

export default function Home(){//props recibe la info que le llegue y se usa props.info
    const dispatch =useDispatch()
    const allRecipes =  useSelector((state)=>state?.recipes)//en la const va a venir todo lo que esta en estado de recipes
    useEffect(()=>{//esta funcion es que quiero hacer cuando el componenete se monta o actualiza
        dispatch(getAllRecipes()) // el dispatch permite usar las funciones y en este caso se va a traer todas las recipies
    },[dispatch])// el array de dependencias. cuando lo que este aca dentro se modifique es use effect se va a volver a actualizar
    const [currentPage, setCurrentPage]=useState(1) //la pagina inicial va a ser uno
    const [recipesPerPage,setRecipesPerPage]=useState(9) //quuero que vengan 9 por pagina
    const indexLastRecipe=currentPage*recipesPerPage;
    const indexFirstRecipe=indexLastRecipe-recipesPerPage;
    const currentRecipies=allRecipes.slice(indexFirstRecipe,indexLastRecipe)

    const funcPaginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    return(
        <div>

            <Paginado recipesPerPage={recipesPerPage} numberOfRecipes={allRecipes.length} paginado={funcPaginado}/>
            <select name="" id="">
                <option value="asc">Ascendent</option>
                <option value="desc">Descendent</option>
                <option value="heal">Health Score</option>
            </select>
                <article>
                {currentRecipies?.map((recipe)=>{ //que muestre unicamente las recetas dentro de esta pagina
                    return (
                        <div className="card">
                            <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            diets={recipe.diets}
                            />
                        </div>
                    )
                })}
            </article>
                <Paginado recipesPerPage={recipesPerPage} numberOfRecipes={allRecipes.length} paginado={funcPaginado}/>
        </div>
    )
}