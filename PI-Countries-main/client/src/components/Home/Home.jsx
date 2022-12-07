import React from "react";
import{ useState, useEffect }from "react";
import {useDispatch, useSelector} from "react-redux"; //esto permite conectarse con la DB
//el use slector es el map state to props
//el  use dispatch permite hacer ddispatch directamente
import { getAllCountries, updateFilterActivity, updateFilterContinent, updateOrder, getAllActivities, getCountriesByActivity, getCountriesByContinent, getCountriesOrderedByName} from "../../actions";
import Paginado from "../Paginado/Paginado"
import CountryCard from "../CountryCard/CountryCard"
import style from "./Home.module.css"


export default function Home(){//props recibe la info que le llegue y se usa props.info
    let pais=0;
    let continentNumber=252;
    let actividad=260;
    const continents=["Africa", "Americas", "Antarctic","Asia", "Europe", "Oceania"]
    const dispatch =useDispatch()
    const allCountries =  useSelector((state)=>state?.countries)
    const allActivities = useSelector((state)=>state?.activities)
    const filterActivity = useSelector((state)=>state?.filterActivity)
    const filterContinent = useSelector((state)=>state?.filterContinent)
    const allOrders = useSelector((state)=>state?.orders)
    useEffect(()=>{
        if(allCountries.length===0){
            dispatch(getAllCountries()) 
        }
        if(allActivities.length===0){
            dispatch(getAllActivities())
        }
    },[dispatch,allActivities.length, allCountries.length])
    const [currentPage, setCurrentPage]=useState(0) 
    // const [order,setOrder]=useState("")
    let isFirstPage=true;
    let countriesPerPage=0;
    isFirstPage=currentPage===0?true:false
    countriesPerPage=isFirstPage===true?9:10;
    let indexLastCountry=0;
    let indexFirstCountry=0;
    indexLastCountry=isFirstPage===true?9:(currentPage*10)+9;
    indexFirstCountry=isFirstPage===true?0:indexLastCountry-10;
    const currentCountries=allCountries.slice(indexFirstCountry,indexLastCountry)
    const loadingImg="https://zonavalue.com/wp-content/themes/kauplus/img/loading.gif";
    let arrActivities=allActivities?.map((activity)=>{
        return(activity.name)
    })
    arrActivities.sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'})) //organiza alfabeticamente en reversa
    //toco asi porque hay mayusculas y minusculas
    arrActivities.reverse()//aca enderezamos

    const funcPaginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    function handleFilter(event){
        if(event.target.name==="filterActivity"){
            dispatch(updateFilterActivity(event.target.value))
            dispatch(getCountriesByActivity(event.target.value))
        }else{
            dispatch(updateFilterContinent(event.target.value))
            dispatch(getCountriesByContinent(event.target.value))
        }
        setCurrentPage(0)
    }
    function handleOrderer(event){
        event.preventDefault();
        dispatch(updateOrder(event.target.value))
        if(event.target.value!=="All"){
            dispatch(getCountriesOrderedByName(event.target.value))//aca ordena las countries
            setCurrentPage(0)//aca me lleva la pag 1 luego de haber ordenado
        }
    }
    function clearFilters(event) {
        event.preventDefault();
        dispatch(updateOrder("All"))
        dispatch(updateFilterActivity("All"))
        dispatch(updateFilterContinent("All"))
        dispatch(getCountriesByActivity("All"))
        // dispatch(getCountriesByContinent("All"))
        dispatch(getCountriesOrderedByName("All"))//aca ordena las countries
        setCurrentPage(0)//aca me lleva la pag 1 luego de haber ordenado
    }
    return(
        <div className={style.mainContainer}>

            {
                allCountries.length>0?
                <div className={style.parentElement}>
                    <Paginado numberOfCountries={allCountries.length} paginado={funcPaginado}/>
                    <div className={style.contPag}>
                        <p className={style.pagNum}>Page {currentPage + 1}</p>
                        <label htmlFor="order" className={style.text}>Order By: </label>
                        <select name="order" value={allOrders} onChange={(event)=>handleOrderer(event)}>
                            <option value="All">None</option>
                            <option value="asc">Ascendent</option>
                            <option value="desc">Descendent</option>
                            <option value="popu">Population</option>
                        </select>
                        <label htmlFor="filterActivity" className={style.text}>Filer By: </label>
                        <select name="filterActivity"  value={filterActivity} onChange={(event)=>handleFilter(event)}>
                            <option value="All">Activity</option>
                            {arrActivities?.map((activity)=>{ //que muestre unicamente las countries dentro de esta pagina
                                return (
                                    <option key={actividad++} value={activity}>{activity}</option>
                                    )})
                            }
                        </select>
                        <select name="filterContinent"  value={filterContinent} onChange={(event)=>handleFilter(event)}>
                            <option value="All">Continent</option>
                            {continents?.map((continent)=>{ //que muestre unicamente las countries dentro de esta pagina
                                return (
                                    <option key={continentNumber++} value={continent}>{continent}</option>
                                    )})
                            }
                        </select>
                        <button className={style.buttons} onClick={(event)=>clearFilters(event)}>Clear Filters</button>
                    </div>
                    <article className={style.tarjetas}>
                    {currentCountries?.map((country)=>{ //que muestre unicamente las countries dentro de esta pagina
                        return (
                            <div key={pais++} className={style.card}>
                                <CountryCard
                                key={country.id}
                                id={country.cca3}
                                name={country.name}
                                image={country.flags?country.flags:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"}//si hay imagen que la mande, sino que mande una imagen por default
                                region={country.region}
                                />
                            </div>
                        )
                    })}
                    </article>
                    <Paginado countriesPerPage={countriesPerPage} numberOfCountries={allCountries.length} paginado={funcPaginado}/>
                    </div>
                :
                    <img src={loadingImg} alt="loading" className={style.loading}/>
                
            }
        </div>
    )
}