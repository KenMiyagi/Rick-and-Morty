import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom"
function Nav(props){
    const {onSearch} = props
    return(
        <div className={style.navContainer}>
            <div className={style.buttonsContainer}>
                <NavLink to="/home">
                    <button className={style.home} >Home</button>
                </NavLink>
                
                <NavLink to="/favorites">
                    <button className={style.Favorites}>Favorites</button>
                </NavLink>

                <NavLink to="/about">
                    <button className={style.about} >About</button>
                </NavLink>

                <NavLink to="/">
                    <button className={style.logOut} onClick={()=>alert("Gracias por usar el app")}>Log Out</button>
                </NavLink>
            </div>

            <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default Nav;