import axios from "axios"
import style from "./Detail.module.css"
import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
export default function Detail(){
/*     const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
    const API_KEY =  '921c53ed19ee.ce7a3c34e20b05d4765f'; */
    const {id} = useParams();
    const [character,setCharacter] = useState([]);

    useEffect(() => {
        axios(`http://localhost:3002/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


        const navigate = useNavigate();
      
        const goBack = () => {
          navigate(-1);
        };
    
    return(
        <div>
            <div className={style.detailsContainer}>
                <div className={style.spec} >
                    <button className={style.btn} onClick={goBack}>↩</button>
                    <h2>Nombre: {character?.name}</h2>
                    <h2>Status: {character?.status}</h2>
                    <h2>Species: {character?.species}</h2>
                    <h2>Gender: {character?.gender}</h2>
                    <h2>Origin: {character?.origin?.name}</h2>
                </div>
                <img className={style.img} src={character?.image} alt={character?.name} />
            </div>
        </div>
    )
};