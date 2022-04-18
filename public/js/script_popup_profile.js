
    let username = document.getElementById("username");
    let rol = document.getElementById("rol_user");
    let email = document.getElementById("email_user");
    let pass = document.getElementById("pass_user");
    let url_foto = document.getElementById("foto_user")
    let rutaUsuario = '../usuario/datos'

    fetch(rutaUsuario, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("llegaron los datos")
        console.log(response.datos)
        username.innerHTML = response.datos.nombre_usuario;
        rol.innerHTML = response.datos.id_rol_usuario;
        pass.innerHTML = response.datos.contrasenia_usuario;
        email.innerHTML = response.datos.login_usuario
        url_foto.src = response.datos.url_foto_usuario;


    }).catch(err => {
        console.log(err);
    });