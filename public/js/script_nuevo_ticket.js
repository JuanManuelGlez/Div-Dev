
$(document).ready(function () {
    $('.form-select-label').selectpicker();
});

$(document).on('keyup', '.form-select-label .bs-searchbox input', function (e) {
    var input = e.target.value;
    if(document.getElementsByClassName("no-results").length == 1)
    {
        document.getElementsByClassName("no-results")[0].innerHTML = "No se encontro la label " + input;

        if(input.length > 30)
        {
            document.getElementsByClassName("no-results")[0].innerHTML += '<button type="button" disabled id="agregaLabel">Agregar</button>';
        }
        else
        {
            document.getElementsByClassName("no-results")[0].innerHTML += '<button type="button" id="agregaLabel">Agregar</button>';
        }
        
        document.getElementById("agregaLabel").addEventListener('click', function (event) {

            let labels_actuales = document.querySelector('[data-id="select_labels"]').title.split(", ");

            for(label of labels_actuales)
            {
                document.getElementById(label).setAttribute('selected', true);
            }

            let select_labels = document.getElementById("select_labels");
            
            select_labels.innerHTML = '<option id=' + input + ' value=' + input + '>' + input + '</option>' + select_labels.innerHTML;
            $('.form-select-label').selectpicker('refresh');
            event.stopPropagation();
        });
    }

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
            preguntas.innerHTML += '<div class="row" style="padding: 15px 0px;"><div class="col-xxl-4"><label class="col-form-label text-dark">' + pregunta.Texto_Pregunta + ': </label></div> <div class="col"><input class="form-control" type="text" id="respuesta' + cont + '" name="respuesta' + cont + '">';
            preguntas.innerHTML += '<input type="hidden" id="pregunta' + cont + '" name="pregunta' + cont + '" value="' + pregunta.Id_Pregunta + '">';
            cont++;
        }
        preguntas.innerHTML += '<input type="hidden" id="numPreguntas" name="numPreguntas" value="' + cont + '">';
    }).catch(err => {
        console.log(err);
    });
    
}

