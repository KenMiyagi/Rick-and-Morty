import {ADD_FAV, REMOVE_FAV, ORDER, FILTER} from "./action-types"


const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState, {type, payload}) =>{
    switch(type){
        default: return{...state}
        case ADD_FAV:
            return {
                ...state, myFavorites: payload, allCharacters: payload 
            };
        case REMOVE_FAV:
            return {
                ...state, myFavorites: payload
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(x => x.gender === payload)
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                payload ===  "Ascendente"
                ? allCharactersCopy.sort((a,b)=> a.id - b.id) 
                : allCharactersCopy.sort((a,b)=> b.id - a.id) 
            }
        
    }
}
export default reducer;