
function openTicket(element) {

  id_ticket = element.id.match(/\d+/g);

    let preguntas = document.getElementById("preguntas");
    let asunto = document.getElementById("asunto");
    let id_ticket_div = document.getElementById("id_ticket");
    let tipo_incidencia = document.getElementById("tipo_incidencia");
    let estado = document.getElementById("estado");
    let prioridad = document.getElementById("prioridad");
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
        tipo_incidencia.innerHTML = response.datosGenerales[0].Nombre_Tipo_Incidencia;
        estado.innerHTML = response.estado[0].Nombre_Estado;
        prioridad.innerHTML = response.datosGenerales[0].Nombre_Prioridad;
        descripcion.innerHTML = response.datosGenerales[0].Descripcion;
        preguntas.innerHTML = '';
        for(let pregunta of response.preguntas)
        {
            preguntas.innerHTML += '<div class="row"><div class="col"><label class="col-form-label">' + pregunta.Pregunta + '</label></div></div><div class="row"><div class="col">' + pregunta.Respuesta + '</div></div>';
        }
    }).catch(err => {
        console.log(err);
    });

  document.getElementById("Ticket").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
