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
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
      });
    }
   const onClose = (id)=>{
      const characterFiltered = characters.filter(char => char.id !== Number(id))
      setCharacters(characterFiltered)
   }

   const [access, setAccess] = useState(false);
   const EMAIL = "kenrodrigoariel@gmail.com";
   const PASSWORD = "q1w2e3r4"
   const navigate = useNavigate()

   function login(userData){
      if(EMAIL===userData.email && PASSWORD===userData.password){
         setAccess(true)
         navigate("home")
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
                  <Route path="home" element={<Cards characters={characters} onClose={onClose}/>}/>
                  <Route path="/detail/:id" element={<Detail/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
      </div>
   );
}

export default App;


/*    const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}; */