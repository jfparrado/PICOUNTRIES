import React from "react";
import{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux"; //esto permite conectarse con la DB
//el use slector es el map state to props
//el  use dispatch permite hacer ddispatch directamente
import { getAllCountries, updateFilter, updateOrder} from "../../actions";
// import Paginado from "../Paginado/Paginado"
// import RecipeCard from "../RecipeCard/RecipeCard"
// import style from "./Home.module.css"


export default function Home(){//props recibe la info que le llegue y se usa props.info
    const dispatch =useDispatch()
    const allCountries =  useSelector((state)=>state?.countries)
    const allActivities = useSelector((state)=>state?.activities)
    const allFilters = useSelector((state)=>state?.filters)
    const allOrders = useSelector((state)=>state?.orders)
    useEffect(()=>{
        if(allCountries.length===0){
        dispatch(getAllCountries()) 
        }
        if(allActivities.length===0){
            dispatch(getAllDiets())
        }
    },[dispatch,allActivities.length, allCountries.length])
    const [currentPage, setCurrentPage]=useState(1) 
    const [order,setOrder]=useState("")
    const countriesPerPage=9;
    const indexLastCountry=currentPage*countriesPerPage;
    const indexFirstCountry=indexLastCountry-countriesPerPage;
    const currentCountries=allCountries.slice(indexFirstCountry,indexLastCountry)
    const loadingImg="https://zonavalue.com/wp-content/themes/kauplus/img/loading.gif";
    let arrActivities=allActivities?.map((diet)=>{
        return(diet.name)
    })
    arrActivities.sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'})) //organiza alpabeticamente en reversa
    //toco asi porque hay mayusculas y minusculas
    arrActivities.reverse()//aca enderezamos

    const funcPaginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    function handleFilter(event){
        dispatch(updateFilter(event.target.value))
        dispatch(getRecipesByDiet(event.target.value))
    }
    function handleOrderer(event){
        event.preventDefault();
        dispatch(updateOrder(event.target.value))
        if(event.target.value!=="All"){
            dispatch(getRecipesOrderedByName(event.target.value))//aca ordena las countries
            setCurrentPage(1)//aca me lleva la pag 1 luego de haber ordenado
            setOrder(`Ordenado ${event.target.value}`)// solo para que se vuelva a renderizar el componenete
        }
    }
    return(
        <div className={style.mainContainer}>
            {
                allCountries.length>0?
                <div>
                    <Paginado countriesPerPage={countriesPerPage} numberOfRecipes={allCountries.length} paginado={funcPaginado}/>
                    <select defaultValue={allOrders} onChange={(event)=>handleOrderer(event)}>
                        <option value="All">Order By</option>
                        <option value="asc">Ascendent</option>
                        <option value="desc">Descendent</option>
                        <option value="health">Health Score</option>
                    </select>
                    <select defaultValue={allFilters} onChange={(event)=>handleFilter(event)}>
                    <option value="All">All</option>
                    {arrActivities?.map((diet)=>{ //que muestre unicamente las recetas dentro de esta pagina
                        return (
                            <option value={diet}>{diet}</option>
                            )})
                    }
                    </select>
                    <article>
                    {currentCountries?.map((recipe)=>{ //que muestre unicamente las recetas dentro de esta pagina
                        return (
                            <div className={style.card}>
                                <RecipeCard
                                key={recipe.id}
                                id={recipe.id}
                                name={recipe.name}
                                image={recipe.image?recipe.image:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"}//si hay imagen que la mande, sino que mande una imagen por default
                                activities={recipe.activities}
                                createdInDb={recipe.createdInDb}
                                />
                            </div>
                        )
                    })}
                    </article>
                    <Paginado countriesPerPage={countriesPerPage} numberOfRecipes={allCountries.length} paginado={funcPaginado}/>
                    </div>
                :<div className={style.containerImg}>
                    <img src={loadingImg} alt="loading image" className={style.loading}/>
                </div> 
            }
        </div>
    )
}