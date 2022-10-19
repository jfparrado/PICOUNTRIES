import React from "react";
// import {useDispacth, useSelector} from "react-redux";
// import { getAllRecipes } from "../../actions";
export default function SearchBar(){
    // function handleClick(event){
    //     event.preventDefault();
    //     dispatch(getAllRecipes())
    // }
    
    // const dispatch =useDispacth()
    // const allRecipes = useSelector((state)=>state.recipes)
    return(
        <div>
            <input type="text" placeholder="Recipe" id="searchbox" />
            {/* <button onClick={e=>{handleClick(e)}}>Search</button> */}
        </div>
    )
}