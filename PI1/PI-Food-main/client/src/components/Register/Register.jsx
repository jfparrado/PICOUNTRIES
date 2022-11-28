import React from "react";
import{ useState, useEffect }from "react";
import {useHistory} from "react-router-dom"
import { postUser} from "../../actions";
import {useDispatch} from "react-redux";
import style from "./Register.module.css"

export default function Register(){
    const dispatch=useDispatch();
    const history=useHistory();
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:"",
    })

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        try {
            dispatch(postUser(input))
            alert("user registered")
            setInput({
                name:"",
                email:"",
                password:"",
            })
        history.push("/home") //asi es como se rediriges
        } catch (error) {
            console.log("el error es:", error)
        }
        
    }

    return(
        <form className={style.mainContainer} onSubmit={(event)=>handleSubmit(event)}>
            <div className={style.contenedor}>
                <label htmlFor="name" className={style.titleInput}>Name*: </label>
                <input type='text' name='name' placeholder='Name' id="name" onChange={(event)=>handleChange(event)} required />
            </div>

            <div className={style.contenedor}>
                <label htmlFor="email" className={style.titleInput}>Email*: </label>
                <input type='email' name='email' placeholder='Email' onChange={(event)=>handleChange(event)} required />
            </div>

            <div className={style.contenedor}>
                <label htmlFor="password" className={style.titleInput}>Password*: </label>
                <input type='password' name='password' placeholder='Password' onChange={(event)=>handleChange(event)} required />
            </div>
                <button type="submit" >Register</button>

        </form>
    )
}