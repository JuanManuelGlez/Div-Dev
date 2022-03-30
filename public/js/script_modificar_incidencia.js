
document.getElementById("select_tipo_incidencia").onchange = () =>
{
    let preguntas = document.getElementById("preguntas_nuevas");
    let idTipo = document.getElementById("select_tipo_incidencia").value;
    const csrf = document.getElementById('_csrf').value;
    let idTicket=document.getElementById('Id_Ticket').value;

    let rutaPreguntas = '../tipo_incidencia/preguntasNuevas/' + idTipo;

    preguntas.innerHTML = '';
    console.log(JSON.stringify(idTicket));
    fetch(rutaPreguntas, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body: JSON.stringify(idTicket)
    })
    .then(response => response.json())
    .then(response => {
        console.log(body)
        let cont = 0;
        for(let pregunta of response.preguntas)
        {
            preguntas.innerHTML += '<label for="respuesta' + cont + '">' + pregunta.Texto_Pregunta + ': </label> <input type="text" id="respuesta' + cont + '" name="respuesta' + cont + '"><br> ';
            preguntas.innerHTML += '<input type="hidden" id="pregunta' + cont + '" name="pregunta' + cont + '" value="' + pregunta.Id_Pregunta + '">';
            cont++;
        }
        preguntas.innerHTML += '<input type="hidden" id="numPreguntas" name="numPreguntas" value="' + cont + '">';
    }).catch(err => {
        console.log(err);
    });
    
}