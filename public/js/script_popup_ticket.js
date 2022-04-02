
function openTicket(element) {

  id_ticket = element.id.match(/\d+/g);

    let preguntas = document.getElementById("preguntas");
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

        boton_comentarios.onclick = "window.location.href='/comentario/" + id_ticket + "'";

        descripcion.innerHTML = response.datosGenerales[0].Descripcion;
        preguntas.innerHTML = '';
        for(let pregunta of response.preguntas)
        {
            preguntas.innerHTML += '<div class="row"><div class="col"><label class="col-form-label">' + pregunta.Pregunta + '</label></div></div><div class="row"><div class="col">' + pregunta.Respuesta + '</div></div>';
        }
    }).catch(err => {
        console.log(err);
    });

  document.getElementById("Ticket").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
