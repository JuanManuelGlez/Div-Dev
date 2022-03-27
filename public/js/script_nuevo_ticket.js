
$(document).ready(function () {
    $('.form-select-label').selectpicker();
});

document.getElementById("select_tipo_incidencia").onchange = () =>
{
    let campos = document.getElementById("campos_ticket");
    let preguntas = document.getElementById("preguntas_ticket");
    var idTipo = document.getElementById("select_tipo_incidencia").value;

    let rutaPreguntas = '../tipo_incidencia/preguntas/' + idTipo;

    campos.style.display = "block";

    preguntas.innerHTML = '';

    fetch(rutaPreguntas, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
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
        preguntas.innerHTML += '<input type="hidden" id="numPreguntas" name="numPreguntas" value="' + cont + '">';
    }).catch(err => {
        console.log(err);
    });
    
}