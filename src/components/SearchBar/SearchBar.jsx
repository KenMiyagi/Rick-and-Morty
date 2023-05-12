import style from "./SearchBar.module.css"
import {useState} from "react"
function SearchBar(props) {

   const [id,setStateId] =useState("")

   const handleChange= (event) =>{
   setStateId(event.target.value)
   }

   return (
      <div className={style.searchContainer}>
         <input onChange={handleChange} className={style.searchInput} type='search' value={id} />
         <button onClick={()=>{props.onSearch(id); setStateId("")}} className={style.searchButton}>Agregar</button>
      </div>
   );
}

export default SearchBar;
