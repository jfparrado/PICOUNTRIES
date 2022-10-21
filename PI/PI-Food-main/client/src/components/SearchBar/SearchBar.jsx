import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux"; 
import { getRecipesByName } from "../../actions";
export default function SearchBar(){
    const dispatch =useDispatch()
    console.log(dispatch)
    const [name,setName]=useState("")

    function handleInputChange(event){
        event.preventDefault()
        setName(event.target.value)
    }
    function handleClick(event){
        event.preventDefault();
        dispatch(getRecipesByName(name))
    }
    
    return(
        <div>
            <input type="text" placeholder="Recipe" id="searchbox" onChange={(event)=>handleInputChange(event)} />
            <button type="submit" onClick={(event)=>{handleClick(event)}}>Search</button>
        </div>
    )
}