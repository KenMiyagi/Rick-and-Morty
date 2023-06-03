//import characters from './data.js';
import './App.css';
import Favorites from "./components/Favorites/Favorites"
import Form from "./components/Form/Form"
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
function App() {
   let [characters, setCharacters] = useState([]);
   
   const onSearch = async (id)=> {
      try {
         const {data} = await axios(`http://localhost:3002/rickandmorty/character/${id}`);
         if (data.name) {
            // Verificar si el personaje ya está en la lista
            if (!characters.some((char) => char.id === data.id)) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert('¡Este personaje ya está en la lista!');
            }
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
      } catch (error) {
         throw Error(error)
      }
    }
   const onClose = (id)=>{
      const characterFiltered = characters.filter(char => char.id !== Number(id))
      setCharacters(characterFiltered)
   }

   const [access, setAccess] = useState(false);
   const EMAIL = "kenrodrigoariel@gmail.com";
   const PASSWORD = "q1w2e3r4"
   const navigate = useNavigate()

   const login = async (userData) =>  {
      const { email, password } = userData;
      const URL = 'http://localhost:3002/rickandmorty/login/';
      
      try {
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         throw Error(error)
      }
   }

   useEffect(()=> {
      !access && navigate("/");
   },[access])
   

   return (
      <div className='App'>
         {!((useLocation()).pathname==="/") && <Nav path="/:" onSearch={onSearch}></Nav>}
            <Routes>
                  <Route path="/" element={<Form login={login}/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
                  <Route path="/detail/:id" element={<Detail/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
      </div>
   );
}

export default App;

