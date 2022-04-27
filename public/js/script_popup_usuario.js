function openUsuario(element) {

    const id_usuario = element.id.match(/\d+/g);

    document.getElementById("Id_Usuario").value = id_usuario;


    let IdUsuarioDiv = document.getElementById("Id_Usuario");
    let select_rol_ = document.getElementById("id_rol");
    let nombre_usuario = document.getElementById("nombre");
    let url_foto = document.getElementById("foto");
    let login = document.getElementById("login");
    let select_rol = document.getElementById("select_rol");
    let total= document.getElementById("total_tickets");

    let rutaUsuarios = '../usuario/datos/' + id_usuario;
    

    fetch(rutaUsuarios, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {

        IdUsuarioDiv.innerHTML = response.datosGenerales[0].Id_Usuario;
        nombre_usuario.innerHTML = response.datosGenerales[0].Nombre_Usuario;
        url_foto.src = response.datosGenerales[0].URL_Foto;
        login.innerHTML = response.datosGenerales[0].Login;
        select_rol.namedItem("rol"+response.datosGenerales[0].Id_Rol).selected = true;
        
        if(!response.privilegios.includes(15)){
            document.getElementById("select_rol").style.display="none";
            document.getElementById("Usuario_Rol").innerHTML=response.rol[0].Nombre_Rol;
        }
        console.log(response.total)
        total.innerHTML = response.total[0].Total;
        


    }).catch(err => {
        console.log(err);
    });

  document.getElementById("Profile").style.display = "flex";
}


document.getElementById("enviar").onclick = () =>
{
    const idUsuario = document.getElementById("Id_Usuario").value;
    let select_rol = document.getElementById("select_rol");
    const csrf = document.getElementById('_csrf').value;
    data = {
      rol:select_rol.value,
    }

    fetch(idUsuario, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'csrf-token': csrf
      },
      body:JSON.stringify(data)
  })
  .then(response => {
      alert("Datos guardados");
      location.reload();
  }).catch(err => {
      console.log(err);
  });
}

function closeUsuario() {
  document.getElementById("Profile").style.display = "none";
}
