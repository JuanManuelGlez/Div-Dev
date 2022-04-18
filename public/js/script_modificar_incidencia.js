$(document).ready(function () {
    $('.form-select-label').selectpicker();
});

$(document).on('keyup', '.form-select-label .bs-searchbox input', function (e) {
    var input = e.target.value;
    if(document.getElementsByClassName("no-results").length == 1)
    {
        document.getElementsByClassName("no-results")[0].innerHTML = "No se encontro la pregunta " + input;

        if(input.length > 30)
        {
            document.getElementsByClassName("no-results")[0].innerHTML += '<button type="button" disabled id="agregaPregunta">Agregar</button>';
        }
        else
        {
            document.getElementsByClassName("no-results")[0].innerHTML += '<button type="button" id="agregaPregunta">Agregar</button>';
        }
        
        document.getElementById("agregaPregunta").addEventListener('click', function (event) {

            let preguntas_actuales = document.querySelector('[data-id="select_preguntas"]').title.split(", ");

            for(pregunta of preguntas_actuales)
            {
                document.getElementById(pregunta.replace(/\s/g,'_')).setAttribute('selected', true);
            }

            let select_preguntas = document.getElementById("select_preguntas");
            
            select_preguntas.innerHTML = '<option id=' + input.replace(/\s/g,'_') + ' value=' + input.replace(/\s/g,'_') + '>' + input + '</option>' + select_preguntas.innerHTML;
            document.getElementById(input.replace(/\s/g,'_')).setAttribute('selected', true);
            e.target.value = "";

            
            $('.form-select-label').selectpicker('refresh');
            event.stopPropagation();
        });
    }

});


document.getElementById("select_tipo_incidencia").onchange = () =>
{
    let preguntas = document.getElementById("preguntas_nuevas");
    let idTipo = document.getElementById("select_tipo_incidencia").value;
    const csrf = document.getElementById('_csrf').value;
    let idTicket=document.getElementById('Id_Ticket').value;
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
        preguntas.innerHTML += '<input type="hidden" id="numPreguntas" name="numPreguntas" value="' + cont + '">';
        
    }).catch(err => {
        console.log(err);
    });
    
}