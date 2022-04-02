
function openTicket(element) {

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
            preguntas.innerHTML += '<label for="respuesta' + cont + '">' + pregunta.Texto_Pregunta + ': </label> <input type="text" id="respuesta' + cont + '" name="respuesta' + cont + '"><br> ';
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
  let ruta = '/comentario/'+document.getElementById("Id_Ticket").value;
  window.location.href = ruta;
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
