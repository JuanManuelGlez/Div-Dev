
function openTicket(element) {
    document.getElementById("commentShow").style.display = "none";
    const id_ticket = element.id.match(/\d+/g);

    document.getElementById("Id_Ticket").value = id_ticket;

    let preguntas = document.getElementById("preguntas");
    let preguntas_nuevas = document.getElementById("preguntas_nuevas");
    let asunto = document.getElementById("asunto");
    let id_ticket_div = document.getElementById("id_ticket");
    let select_estado = document.getElementById("select_estado");
    let estado_actual = document.getElementById("Estado_Actual");
    let select_tipo_incidencia = document.getElementById("select_tipo_incidencia");
    let select_prioridad = document.getElementById("select_prioridad");
    let boton_comentarios = document.getElementById("boton_comentarios");
    let descripcion = document.getElementById("descripcion");

    let rutaPreguntas = '../tickets/datos/' + id_ticket;

    fetch(rutaPreguntas, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        asunto.innerHTML = response.datosGenerales[0].Asunto;
        id_ticket_div.innerHTML = id_ticket;

        select_estado.namedItem("estado"+response.estado[0].Id_Estado).selected = true;
        estado_actual.value = response.estado[0].Id_Estado;

        select_tipo_incidencia.namedItem("tipo_incidencia"+response.datosGenerales[0].Id_Tipo_Incidencia).selected = true;

        select_prioridad.namedItem("prioridad"+response.datosGenerales[0].Id_Prioridad).selected = true;

        

        descripcion.innerHTML = response.datosGenerales[0].Descripcion;
        preguntas.innerHTML = '';
        preguntas_nuevas.innerHTML = '';
        for(let pregunta of response.preguntas)
        {
            preguntas.innerHTML += '<div class="row"><div class="col"><label class="col-form-label">' + pregunta.Pregunta + '</label></div></div><div class="row"><div class="col">' + pregunta.Respuesta + '</div></div>';
        }
    }).catch(err => {
        console.log(err);
    });

  document.getElementById("Ticket").style.display = "flex";
}

document.getElementById("select_tipo_incidencia").onchange = () =>
{
    let preguntas = document.getElementById("preguntas_nuevas");
    let idTipo = document.getElementById("select_tipo_incidencia").value;
    const csrf = document.getElementById('_csrf').value;
    let idTicket = document.getElementById('Id_Ticket').value;

    let data={
        id:idTicket
    }
    let rutaPreguntas = '../tipo_incidencia/preguntasNuevas/' + idTipo;
    
    preguntas.innerHTML = '';
    fetch(rutaPreguntas, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        let cont = 0;
        for(let pregunta of response.preguntas)
        {
            preguntas.innerHTML += '<div class="col"> <label for="respuesta' + cont + '">' + pregunta.Texto_Pregunta + ' </label> </div> <div class="col"> <input type="text" id="respuesta' + cont + '" name="respuesta' + cont + '"> </div> <br> ';
            preguntas.innerHTML += '<input type="hidden" id="pregunta' + cont + '" name="pregunta' + cont + '" value="' + pregunta.Id_Pregunta + '">';
            cont++;
        }
        document.getElementById("numPreguntas").value = cont;
        
    }).catch(err => {
        console.log(err);
    });
    
}

document.getElementById("boton_comentarios").onclick = () =>
{ 
  const id_ticket = document.getElementById("Id_Ticket").value;

  //document.getElementById("Id_Ticket").value = id_ticket;

    let comentarios = document.getElementById("comentarios");
    let rutaPreguntas = '../comentario/datos/' + id_ticket;

    fetch(rutaPreguntas, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        comentarios.innerHTML = '';
        //comentarios_nuevas.innerHTML = '';
                                              

        for(let comentario of response.comentarios)
        {   
            if(comentario.URL_Archivo != ''){
                if (comentario.URL_Archivo.includes(".jpg") || comentario.URL_Archivo.includes(".jpeg") || comentario.URL_Archivo.includes(".png") || comentario.URL_Archivo.includes(".gif")){
                    comentarios.innerHTML += '<div class="card mb-4"> <div class="card-body"> <p>' + comentario.Texto_Comentario + '</p> <a href="/uploads/'+comentario.URL_Archivo+'" download ='+comentario.URL_Archivo+'> <img src="/uploads/'+comentario.URL_Archivo+'" alt="Download foto adjunta"> </a> <div class="d-flex justify-content-between"> <div class="d-flex flex-row align-items-center"> <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25" height="25" /> <p class="small mb-0 ms-2">' + comentario.Nombre_Usuario + '</p> </div> <div class="d-flex flex-row align-items-center"> <p class="small text-muted mb-0"> Comentado en: '+ comentario.Fecha_y_Hora +'</p> </div> </div> </div> </div>'
                }else{
                    comentarios.innerHTML += '<div class="card mb-4"> <div class="card-body"> <p>' + comentario.Texto_Comentario + '</p> <a href="/uploads/'+comentario.URL_Archivo+'" download = '+comentario.URL_Archivo+' > <p> Archivo Adjunto </p> </a> <div class="d-flex justify-content-between"> <div class="d-flex flex-row align-items-center"> <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25" height="25" /> <p class="small mb-0 ms-2">' + comentario.Nombre_Usuario + '</p> </div> <div class="d-flex flex-row align-items-center"> <p class="small text-muted mb-0"> Comentado en: '+ comentario.Fecha_y_Hora +'</p> </div> </div> </div> </div>'
                }
            }else{
                comentarios.innerHTML += '<div class="card mb-4"> <div class="card-body"> <p>' + comentario.Texto_Comentario + '</p> <div class="d-flex justify-content-between"> <div class="d-flex flex-row align-items-center"> <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25" height="25" /> <p class="small mb-0 ms-2">' + comentario.Nombre_Usuario + '</p> </div> <div class="d-flex flex-row align-items-center"> <p class="small text-muted mb-0"> Comentado en: '+ comentario.Fecha_y_Hora +'</p> </div> </div> </div> </div>'
            }
        }
    }).catch(err => {
        console.log(err);
    });

  document.getElementById("commentShow").style.display = "flex";

}

function submitForm(){
  const id_ticket = document.getElementById("Id_Ticket").value;

  //document.getElementById("Id_Ticket").value = id_ticket;
    const csrf = document.getElementById("_csrff").value;

    let comentarios = document.getElementById("comentarios");
    let comentarios_nuevos = document.getElementById("nuevoComentario");
    let rutaPreguntas = '../comentario/nuevo/' + id_ticket;
    let id_tickett = document.getElementById("id_ticket");
    id_tickett.value = id_ticket;
    let texto_comentario = document.getElementById("texto_comentario");


    data = {
        id_ticket:id_tickett.value,
        texto_comentario:texto_comentario.value
      }
      
      fetch(rutaPreguntas, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        alert("Datos guardados");
        console.log(response);
        comentarios.innerHTML = "";
        for(let comentario of response.comentarios)
        {
            comentarios.innerHTML += '<div class="card mb-4"> <div class="card-body"> <p>' + comentario.Texto_Comentario + '</p> <div class="d-flex justify-content-between"> <div class="d-flex flex-row align-items-center"> <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25" height="25" /> <p class="small mb-0 ms-2">' + comentario.Nombre_Usuario + '</p> </div> <div class="d-flex flex-row align-items-center"> <p class="small text-muted mb-0"> Comentado en: '+ comentario.Fecha_y_Hora +'</p> </div> </div> </div> </div>'
        }
        document.getElementById("commentShow").style.display = "flex";
    }).catch(err => {
        console.log(err);
    });

  

}

document.getElementById("enviar").onclick = () =>
{
    const idTicket = document.getElementById("Id_Ticket").value;

    let preguntas = document.getElementById("preguntas");
    let select_estado = document.getElementById("select_estado");
    let estado_actual = document.getElementById("Estado_Actual");
    let select_tipo_incidencia = document.getElementById("select_tipo_incidencia");
    let select_prioridad = document.getElementById("select_prioridad");
    let numPreguntas_ = document.getElementById("numPreguntas").value;
    const csrf = document.getElementById('_csrf').value;

    let preguntas_nuevas = [];
    for(let i = 0; i < numPreguntas_; i++)
    { 
      let actualP = 'pregunta' + i;
      let actualR = 'respuesta' + i;
      preguntas_nuevas.push({pregunta:document.getElementById(actualP).value, respuesta:document.getElementById(actualR).value})
    }
    data = {
      estado:select_estado.value,
      prioridad:select_prioridad.value,
      Estado_Actual:estado_actual.value,
      tipo_incidencia:select_tipo_incidencia.value,
      preguntas:preguntas_nuevas,
      numPreguntas:numPreguntas_
    }

    fetch(idTicket, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'csrf-token': csrf
      },
      body:JSON.stringify(data)
  })
  .then(response => {
      alert("Datos guardados");
      closeTicket();
      openTicket(document.getElementById("boton"+idTicket));
  }).catch(err => {
      console.log(err);
  });
}

function closeTicket() {
  document.getElementById("Ticket").style.display = "none";
}
