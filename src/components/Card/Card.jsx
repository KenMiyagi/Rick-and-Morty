import style from "./Card.module.css"
import {NavLink} from "react-router-dom"
import {addFav, removeFav} from "../../redux/actions"
import {connect} from "react-redux" 
import {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"


function Card({ id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else {
         setIsFav(true);
         addFav({ id, name, species, gender, image,})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.contenedor}>
         {((useLocation()).pathname==="/home") ? <button className={style.boton} onClick={()=>onClose(id)}>X</button> : <button className={style.boton} onClick={handleFavorite}>X</button>}
         {/* <button className={style.boton} onClick={()=>onClose(id)}>X</button> */}
            <p nameClass={style.name}>{name}</p>
         <NavLink to={`/detail/${id}`} id={id}>
            <img className={style.img} src={image} alt='' />
         </NavLink>
         <button className={style.favButton} onClick={handleFavorite}>{isFav ? "❤️":"🤍"}</button>
{/*          <div className={style.spec} >
            <p className={style.status}>Status: {status}</p>
            <p className={style.species}>Species: {species}</p>
            <p className={style.gender}>Gender: {gender}</p>
            <p className={style.origin}>Origin: {origin}</p>
         </div> */}
      </div>
   );
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (characters)=> { dispatch(addFav(characters)) },
      removeFav: (id)=> { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)