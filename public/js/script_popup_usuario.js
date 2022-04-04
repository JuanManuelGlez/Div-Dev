function openUsuario(element) {

    const id_usuario = element.id.match(/\d+/g);

    document.getElementById("Id_Usuario").value = id_usuario;


    let IdUsuarioDiv = document.getElementById("Id_Usuario");
    let select_rol = document.getElementById("id_rol");
    let nombre_usuario = document.getElementById("nombre");
    let url_foto = document.getElementById("foto");
    let login = document.getElementById("login");

    // let asunto = document.getElementById("asunto");
    // let id_ticket_div = document.getElementById("id_ticket");
    // let select_estado = document.getElementById("select_estado");
    // let estado_actual = document.getElementById("Estado_Actual");
    // let select_tipo_incidencia = document.getElementById("select_tipo_incidencia");
    // let select_prioridad = document.getElementById("select_prioridad");
    // let boton_comentarios = document.getElementById("boton_comentarios");
    // let descripcion = document.getElementById("descripcion");

    let rutaUsuarios = '../usuario/datos/' + id_usuario;

    fetch(rutaUsuarios, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        //id_usuario_div.innerHTML = id_usuario;
        //select_rol.namedItem("rol"+response.datosGenerales[0].Id_Rol).selected = true;
        IdUsuarioDiv.innerHTML = response.datosGenerales[0].Id_Usuario;
        nombre_usuario.innerHTML = response.datosGenerales[0].Nombre_Usuario;
        url_foto.src = response.datosGenerales[0].URL_Foto;
        login.innerHTML = response.datosGenerales[0].Login;

    }).catch(err => {
        console.log(err);
    });

  document.getElementById("Profile").style.display = "flex";
}


// document.getElementById("boton_comentarios").onclick = () =>
// { 
//   let ruta = '/comentario/'+document.getElementById("Id_Ticket").value;
//   window.location.href = ruta;
// }

function closeUsuario() {
  document.getElementById("Profile").style.display = "none";
}
