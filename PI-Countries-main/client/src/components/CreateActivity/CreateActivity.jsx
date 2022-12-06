import React from "react";
import{ useState, useEffect }from "react";
import {useHistory} from "react-router-dom"
import { postActivities, getAllActivities, getAllCountries, getAllCountriesAndActivities} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import style from "./CreateActivity.module.css";

export default function CreateActivity(){
    const dispatch=useDispatch();
    const history=useHistory();
    const allSeasons = ["Autumn", "Spring", "Summer", "Winter"]
    const allCountriesData =  useSelector((state)=>state?.allCountries)
    const allActivities = useSelector((state)=>state?.activities)
    const allCountriesAndActivities = useSelector((state)=>state?.countriesAndActivities)
    let keyCountries=0;
    let keyActivities=0;
    allCountriesData.sort((countryA, countryB) => {
        const nameA = countryA.name.toUpperCase(); // ignore upper and lowercase
        const nameB = countryB.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
        // names must be equal
      });
      const allCountries=allCountriesData?.map((country)=>{
        return country.name;
      })
    // const allActivities = useSelector((state)=>state?.activities)
    const [errors,setErrors]=useState({
        name:`Se requiere name`,
        difficulty:"Se requiere difficulty ",
        duration:"Se requiere duration",
        season:"Se requiere season",
    }) //aca se crean los posibles errores
    const [input,setInput]=useState({
        name:"",
        difficulty:"",
        duration:"",
        seasons:[],
        countries:[]
    })
    useEffect(()=>{
        if(allCountries.length===0){
        dispatch(getAllCountries()) 
        }
        if(allCountriesAndActivities.length===0){
        dispatch(getAllCountriesAndActivities()) 
        }
        if(allActivities.length===0){
            dispatch(getAllActivities())
        }
    },[dispatch,allActivities.length, allCountries.length, allCountriesAndActivities.length])

    function validate(input){ //aca entra todo el estado input
        let errors={}
        for(let propiedad in input){
            if (!input[propiedad]){
                errors[propiedad]=`Se requiere ${propiedad}`;
            }
        }
        return errors
    }

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
            ...input,
            [event.target.name]: event.target.value
            })
        )
    }

    function handleCheck(event){
        if(event.target.checked){
            setInput({
                ...input,
                [event.target.name]: [...input[event.target.name], event.target.value]
            })
        }
        if(!event.target.checked){//para que al deseleccionar del estado se quiten las cosas
            setInput({
                ...input,
                [event.target.name]: input[event.target.name].filter(seleccion=>seleccion!==event.target.value)
            })
        }
    }
    
    function handleSubmit(event){
        event.preventDefault();
        try {
            if(coincidencia.length===0){
                dispatch(postActivities(input))
                alert("Activity created")
                setInput({
                    name:"",
                    difficulty:"",
                    duration:"",
                    season:"",
                    countries:[]
                })
                dispatch(getAllCountries()) 
                dispatch(getAllActivities())
                history.push("/home") //asi es como se rediriges
            }else{
                alert(`The countries ${coincidencia.join(", ")} are already associated with this activity`)
            }
        } catch (error) {
            console.log("el error es:", error)
            alert("The activity could not be created")
        }
        
    }
    let idsCountriesInput=allCountriesData.filter((country)=>input.countries.includes(country.name)).map((country)=>country.cca3)//trae los ids de los paises del input
    let paisesDentroDeActividades= allCountriesAndActivities.filter((linea)=>(linea.activityName===input.name)).map((country)=>country.countryCca3)
    let coincidencia=[]
    if (paisesDentroDeActividades) {
        coincidencia=idsCountriesInput.filter((id)=>paisesDentroDeActividades.includes(id))
    }
    
    // let nameActivities=allActivities.filter((activity)=>activity.name===input.name)


    return(
        <form className={style.mainContainer} onSubmit={(event)=>handleSubmit(event)}>
            <h3 className={style.title}>Create a new activity</h3>
            <div className={style.container}>
                <label htmlFor="name" className={style.titleInput}>Name<span>*</span>: </label>
                <input className={style.input} type='text' maxLength="60" placeholder="Sky" name='name' id="name"  value={input.name} onChange={(event)=>handleChange(event)} required/>
                {errors.name&&(
                <b> <p className={style.errors}>{errors.name}</p></b>
                )}
                {/* {nameActivities.length!==0&&(
                <b> <p className={style.errors}>La actividad ya existe</p></b>
                )} */}
            </div>

            <div className={style.container}>
                <label htmlFor="difficulty" className={style.titleInput}>Difficulty<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='difficulty' placeholder="1"id="difficulty" min="0" max="100" value={input.difficulty} onChange={(event)=>handleChange(event)} required/>
                {errors.difficulty&&(
                <b><p className={style.errors}>{errors.difficulty}</p></b>
                )}
            </div>

            <div className={style.container}>
                <label htmlFor="duration" className={style.titleInput}>Duration(minutes)<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='duration' placeholder="1"id="duration" min="0" max="14400" value={input.duration} onChange={(event)=>handleChange(event)} required/>
                {errors.duration&&(
                <b><p className={style.errors}>{errors.duration}</p></b>
                )}
            </div>

            <div className={style.title}> <h4 >Seasons</h4> </div>
            <div className={style.arrays}>
                {allSeasons?.map((season)=>{
                    return (
                    <div key={`key ${keyActivities++}`} className={style.contCountries}>
                        <input type="checkbox" name="seasons" value={season} onChange={(event)=>handleCheck(event)} />
                        <label className={style.inputArray}>{season}</label>
                    </div>)
                    })}
            </div>

            <div className={style.title}> <h4 >Countries</h4> </div>
            <div className={style.arrays}>
                {allCountries?.map((country)=>(
                    <div key={`key ${keyCountries++}`} className={style.contCountries}>
                        <input type="checkbox" name="countries" value={country} onChange={(event)=>handleCheck(event)} />
                        <label className={style.inputArray}>{country}</label>
                    </div>
                ))}
                 {coincidencia.length!==0&&(
                <b> <p className={style.errors}>The activity is already associated with {coincidencia.join(",")}, please deselect it</p></b>
                )}
            </div>

            <div>
                {Object.keys(errors).length!==0 ||coincidencia.length!==0? 
                <button className={style.buttonDissabled} type="submit" disabled >Create Activity</button>:
                <button className={style.buttons} type="submit" >Create Activity</button>
                }
            </div>
        </form>
    )
}