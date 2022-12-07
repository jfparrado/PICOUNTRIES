import React from "react";
import{ useState, useEffect }from "react";
import {useHistory} from "react-router-dom"
import { putActivities, getAllActivities, getAllCountries} from "../../actions";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import style from "./EditActivity.module.css";

export default function EditActivity(){
    const loadingImg="https://zonavalue.com/wp-content/themes/kauplus/img/loading.gif";
    const { id } = useParams();
    const dispatch=useDispatch();
    const history=useHistory();
    const allSeasons = ["Autumn", "Spring", "Summer", "Winter"]
    const allActivities = useSelector((state)=>state?.activities)
    let keyActivities=0;
    let activityToEdit= allActivities.filter((activity)=>activity.name===id)

    const [errors,setErrors]=useState({
        difficulty:"Difficulty is required",
        duration:"Duration is required",
        season:"Season is required",
    }) //aca se crean los posibles errores
    const [input,setInput]=useState({
        name:id,
        difficulty:"",
        duration:"",
        seasons:[],
    })
    useEffect(()=>{
        if(allActivities.length===0){
            dispatch(getAllActivities())
        }
    },[dispatch,allActivities.length])

    function validate(input){ //aca entra todo el estado input
        let errors={}
        for(let propiedad in input){
            if (!input[propiedad]){
                errors[propiedad]=`${propiedad.charAt(0).toUpperCase() + propiedad.slice(1)} is required`;
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
            if(input.difficulty<1 ||input.difficulty>5 ){
                    alert(`The difficulty must be a number between 1 and 5`)
            }else if(input.duration<1 ){
                alert(`The duration must be a positive number`)
            }else{
                dispatch(putActivities(input))
                alert("Activity updated")
                setInput({
                    difficulty:"",
                    duration:"",
                    season:"",
                })
                dispatch(getAllCountries()) 
                dispatch(getAllActivities())
                history.push("/home") //asi es como se rediriges
            }
        } catch (error) {
            console.log("el error es:", error.message)
            alert("The activity could not be updated")
        }
        
    }

    return(
        <form className={style.mainContainer} onSubmit={(event)=>handleSubmit(event)}>
            {allActivities.length>0?
            <div>

            <h3 className={style.title}>Edit activity {activityToEdit[0].name} </h3>

            <div className={style.container}>
                <label htmlFor="difficulty" className={style.titleInput}>Difficulty<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='difficulty' placeholder="1-5"id="difficulty" min="1" max="5"  value={input.difficulty} onChange={(event)=>handleChange(event)} required/>
                {errors.difficulty&&(
                <b><p className={style.errors}>{errors.difficulty}</p></b>
                )}
                {(input.difficulty<0||input.difficulty>5) &&(
                <b><p className={style.errors}>Must be a number between 1 and 5</p></b>
                )}
            </div>

            <div className={style.container}>
                <label htmlFor="duration" className={style.titleInput}>Duration(minutes)<span>*</span>: </label>
                <input className={style.input} type='number' maxLength="3" name='duration' placeholder="1"id="duration" min="1" value={input.duration} onChange={(event)=>handleChange(event)} required/>
                {errors.duration&&(
                <b><p className={style.errors}>{errors.duration}</p></b>
                )}
                {(input.duration!=="" &&input.duration<1) &&(
                <b><p className={style.errors}>Must be a greater than 0</p></b>
                )}
            </div>

            <div className={style.title}> <h4 >Seasons</h4> </div>
            <div className={style.arrays}>
                {allSeasons?.map((season)=>{
                    return (
                    <div key={`${keyActivities++}`} className={style.contCountries}>
                        <input type="checkbox" name="seasons" value={season} onChange={(event)=>handleCheck(event)} />
                        <label className={style.inputArray}>{season}</label>
                    </div>)
                    })}
            </div>

            <div>
                {Object.keys(errors).length!==0 ||(input.difficulty<0||input.difficulty>5) ||input.duration<1? 
                <button className={style.buttonDissabled} type="submit" disabled >Edit Activity</button>:
                <button className={style.buttons} type="submit" >Edit Activity</button>
                }
            </div>
            </div>
            :<div className={style.containerImg}>
            <img src={loadingImg} alt="loading" className={style.loading}/>
        </div> 
            }
        </form>
    )
}