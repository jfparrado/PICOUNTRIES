import React from "react";
import{ useState, useEffect }from "react";
import {useHistory} from "react-router-dom"
import { postActivities, getAllActivities, getAllCountries} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import style from "./CreateActivity.module.css";

export default function CreateActivity(){
    const dispatch=useDispatch();
    const history=useHistory();
    const allSeasons = ["Autumn", "Spring", "Summer", "Winter"]
    const allCountriesData =  useSelector((state)=>state?.allCountries)
    const allActivities = useSelector((state)=>state?.activities)
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
        if(allActivities.length===0){
            dispatch(getAllActivities())
        }
    },[dispatch,allActivities.length, allCountries.length])

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
        } catch (error) {
            console.log("el error es:", error)
            alert("The activity could not be created")
        }
        
    }
    let resultado=allActivities.filter((activity)=>activity.name===input.name)
    return(
        <form className={style.mainContainer} onSubmit={(event)=>handleSubmit(event)}>
            <h3 className={style.title}>Create a new activity</h3>
            <div className={style.container}>
                <label htmlFor="name" className={style.titleInput}>Name<span>*</span>: </label>
                <input className={style.input} type='text' maxLength="60" placeholder="Sky" name='name' id="name"  value={input.name} onChange={(event)=>handleChange(event)} required/>
                {errors.name&&(
                <p className={style.errors}>{errors.name}</p>
                )}
                {resultado.length!==0&&(
                <p className={style.errors}>la actividad ya existe</p>
                )}
            </div>

            <div className={style.container}>
                <label htmlFor="difficulty" className={style.titleInput}>Difficulty<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='difficulty' placeholder="1"id="difficulty" min="0" max="100" value={input.difficulty} onChange={(event)=>handleChange(event)} required/>
                {errors.difficulty&&(
                <p className={style.errors}>{errors.difficulty}</p>
                )}
            </div>

            <div className={style.container}>
                <label htmlFor="duration" className={style.titleInput}>Duration(minutes)<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='duration' placeholder="1"id="duration" min="0" max="14400" value={input.duration} onChange={(event)=>handleChange(event)} required/>
                {errors.duration&&(
                <p className={style.errors}>{errors.duration}</p>
                )}
            </div>

            <div className={style.title}> <h4 >Seasons</h4> </div>
            <div className={style.arrays}>
                {allSeasons?.map((season)=>{
                    return (
                    <div className={style.contCountries}>
                        <input type="checkbox" name="seasons" value={season} onChange={(event)=>handleCheck(event)} />
                        <label className={style.inputArray}>{season}</label>
                    </div>)
                    })}
            </div>

            <div className={style.title}> <h4 >Countries</h4> </div>
            <div className={style.arrays}>
                {allCountries?.map((country)=>(
                    <div className={style.contCountries}>
                        <input type="checkbox" name="countries" value={country} onChange={(event)=>handleCheck(event)} />
                        <label className={style.inputArray}>{country}</label>
                    </div>
                ))}
            </div>

            <div>
                {Object.keys(errors).length!==0 ||resultado.length!==0? 
                <button className={style.buttonDissabled} type="submit" disabled >Create Activity</button>:
                <button className={style.buttons} type="submit" >Create Activity</button>
                }
            </div>
        </form>
    )
}