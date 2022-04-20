
    let username = document.getElementById("username");
    let username_sidebar = document.getElementById("username_sidebar");
    let rol = document.getElementById("rol_user");
    let email = document.getElementById("email_user");
    //let pass = document.getElementById("pass_user");
    let url_foto = document.getElementById("foto_user")
    let rutaUsuario = '../usuario/datos'
    let total = document.getElementById("total")
    let Id_Usuario = document.getElementById("Id_Usuario")
    let foto_sidebar = document.getElementById("foto_sidebar")

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
        username.value = response.datos[0].Nombre_Usuario;
        username_sidebar.innerHTML = response.datos[0].Nombre_Usuario;
        rol.innerHTML = response.datos[0].Id_Rol;
        //pass.innerHTML = response.datos[0].Contraseña;
        email.innerHTML = response.datos[0].Login
        url_foto.src = response.datos[0].URL_Foto;
        total.innerHTML = response.datos[0].Total;
        Id_Usuario.innerHTML = response.datos[0].Id_Usuario;
        foto_sidebar.src = response.datos[0].URL_Foto;


    }).catch(err => {
        console.log(err);
    });


    document.getElementById("Actualizar_Perfil").onclick = () =>{
        let username = document.getElementById("username").value;
        let Id_Usuario = document.getElementById("Id_Usuario").innerHTML;
        const csrf = document.getElementById('_csrf').value;
        console.log(Id_Usuario)
        ruta = '../usuario/profile_update';
        data = {
            name: username,
            id_usuario: Id_Usuario
            
            }
    
            fetch(ruta, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf
            },
            body:JSON.stringify(data)
        })
        .then(response => {
            alert("Datos Guardados");
            location.reload();
        }).catch(err => {
            console.log(err);
        });

    };

    var loadFile = function (event) {
        var image = document.getElementById("foto_user");
        image.src = URL.createObjectURL(event.target.files[0]);
        var image_url_json = URL.createObjectURL(event.target.files[0]);
        console.log(image_url_json)
        var id_usuario_json = document.getElementById("Id_Usuario")
        const csrf = document.getElementById('_csrf').value;
        var ruta = '../usuario/profile_update' 
        data = {
        image_url : image_url_json,
        id_usuario : id_usuario_json
        }

        fetch(ruta, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        alert("ksmd");
        location.reload();
    }).catch(err => {
        console.log(err);
    });
      };
      