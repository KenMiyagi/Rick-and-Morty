import Card from '../Card/Card.jsx';
import style from "./Cards.module.css"
export default function Cards(props) {
   const {characters, onClose} = props
   
   return (<>
               {characters.map(({id,name,species,gender,image,origin,status}) => {
            return (
               <div className={style.cardsCointainer}>
               <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
               />
               </div>
            )
         })}
         <div className={style.footer}></div>
   </>)
}
