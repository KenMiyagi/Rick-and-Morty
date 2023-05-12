import {useState} from "react"
import style from "./Form.module.css"
import validation from "./Validation"
//import validations from "./validations"
export default function Form(props){
    const {login} = props
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={style.formContainer}>
            <form className={style.form}>
                <h1 className={style.titulo}>Inicia sesión</h1>
                <label className={style.labelEmail} htmlFor="email">Email:</label><br/>
                <input
                    className={style.inputs}
                    onChange={handleChange} 
                    name="email" 
                    type="email" 
                    placeholder="Ingrese su email" 
                    value={userData.email}>
                </input>
                <p className={style.errors} style={{ visibility: errors.password ? 'visible' : 'hidden' }}>{errors.email}</p>

                <br/>
                <br/>
                <label className={style.labelPassword} htmlFor="password">Password:</label><br/>
                <input
                    className={style.inputs}
                    onChange={handleChange} 
                    name="password" type="password" 
                    placeholder="Ingrese su password" 
                    value={userData.password}>
                </input>
                <p className={style.errors} style={{ visibility: errors.password ? 'visible' : 'hidden' }}>{errors.password}</p>
                <br/>
                <br/>
                <button onClick={handleSubmit} className={style.submitButton}>Submit</button>
            </form>
        </div>
    )
}