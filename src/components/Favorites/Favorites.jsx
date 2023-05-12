import Card from "../Card/Card"
import { useState } from "react"
import {connect, useDispatch} from "react-redux"
import {filterCards, orderCards} from "../../redux/actions"

const Favorites = ({myFavorites})=>{

    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()
    const handleOrder = (event)=>{

        if(aux){
            dispatch(orderCards(event.target.value))
        }else {
            dispatch(orderCards(event.target.value))
        }
        setAux(!aux)
    
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <>
        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        {
            myFavorites?.map(fav => {
                return(
                    <Card
                    key={fav.id}
                    id={fav.id}
                    species={fav.species}
                    origin={fav.origin}
                    gender={fav.gender}
                    name={fav.name}
                    image={fav.image}
                    />
                )
            })
        }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)