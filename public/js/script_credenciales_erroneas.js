//const { append } = require("express/lib/response");

document.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {  
            document.getElementById('credencial').click();
            e.stopImmediatePropagation();
        }
});

document.getElementById("credencial").onclick=()=>{
    let rutaProcedencia = '../usuario/login';
    let mensaje_error = document.getElementById("mensaje_error");
    let correos=document.getElementById("correo").value;
    let contrasenias=document.getElementById("contrasenia").value;
    const csrf = document.getElementById('_csrf').value;

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
        if (response.errores==1){
            //alert("Usuario y/o Contraseña Incorrecots");
            mensaje_error.innerHTML += '<p class="text-center text-danger"> Usuario y/o contraseña erroneo </p>';

        }else if(response.errores==0){
            window.location.href="/"
            
        }else if(response.errores==2){
            mensaje_error.innerHTML += '<p class="text-center text-danger"> No ha verificado su correo </p>';

        }
       
    }).catch(err => {
        console.log(err);
    });
    
}