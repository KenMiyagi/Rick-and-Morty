export default function validation(userData){
    const errors = {};

    if(!(/\S+@\S+\.\S+/).test(userData.email)){
        errors.email = "Formato de email incorrecto."
    }

    if(!userData.email){
        errors.email = "Se debe ingresar un email."
    }

    if(userData.email.length >35){
        errors.email = "El mail no debe superar los 35 caracteres."
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "Debe contener la menos un número."
    }
    
    if(userData.password.length < 6 ){
            errors.password = "La contraseña debe tener mas de 6 carácteres."     
    }
    if(userData.password.length >10){
        errors.password = "La contraseña debe tener menos de 10 carácteres."     
}


    return errors;
}