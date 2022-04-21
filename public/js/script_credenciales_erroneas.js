//const { append } = require("express/lib/response");

document.getElementById("credencial").onclick=()=>{
    let rutaProcedencia = '../usuario/login';
    let mensaje_error = document.getElementById("mensaje_error");
    let correos=document.getElementById("correo").value;
    let contrasenias=document.getElementById("contrasenia").value;
    const csrf = document.getElementById('_csrf').value;
    let boton=document.getElementById("redirrecionar");

    mensaje_error.innerHTML='';
    
    data={
        correo:correos,
        contrasenia:contrasenias
    }


    fetch(rutaProcedencia,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if (response.errores=true){
            mensaje_error.innerHTML += 'Usuario y/o contraseña erroneo';

        }else if(response.errores=false){
            boton.click()
            
        }
       
    }).catch(err => {
        console.log(err);
    });
    
}