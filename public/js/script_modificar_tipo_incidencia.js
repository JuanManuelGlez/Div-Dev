const select_click = 0;

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


            if(preguntas_actuales[0] !== 'Nothing selected')
            {
                let preguntas_totales = document.querySelectorAll('.opcionPregunta');

                preguntas_totales.forEach(element => {
                    console.log(typeof(element.id).replace(/_/g,' '));
                    if(preguntas_actuales.includes((element.id).replace(/_/g,' ')))
                    {
                        element.setAttribute('selected', true);
                    }
                    else
                    {
                        element.removeAttribute('selected'); //Creo que si no lo tiene no pasa nada pero creo que hay que revisar
                    }
                });
            }

            let select_preguntas = document.getElementById("select_preguntas");
            
            select_preguntas.innerHTML = '<option class="opcionPregunta" id=' + input.replace(/\s/g,'_') + ' value=' + input.replace(/\s/g,'_') + '>' + input + '</option>' + select_preguntas.innerHTML;
            document.getElementById(input.replace(/\s/g,'_')).setAttribute('selected', true);
            cambio();

            
            $('.form-select-label').selectpicker('refresh');
            e.target.value = "";
            event.stopPropagation();
        });
    }

});

function borrar (id_B, id_T, N_P, N_T){
    if(window.confirm("Esta seguro que desea eliminar la pregunta "+N_P+" de tipo de incidencia: "+N_T) == true){
        const csrf = document.getElementById('_csrf').value;
        let rutaPreguntas = '../eliminar_pregunta/' + id_B.substring(2);

        let data = {
            id_tipo_incidencia:id_T
        }

        fetch(rutaPreguntas, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf
            },
            body:JSON.stringify(data)
            
        })
        .then(() => {
            document.getElementById("pregunta_"+id_B.substring(2)).innerHTML = "";
        }).catch(err => {
            console.log(err);
        });
    }
}
function cambio(){
    document.getElementById("button_cambios").style.display = 'block';
}

function select_preguntas(select_p){
    document.getElementById(select_p).setAttribute('selected', true);
}

document.getElementById("button_cambios").onclick = () =>{
    if(document.getElementById("Nombre_Tipo_Incidencia").value != ""){
        if(window.confirm("Esta seguro que desea guardar los cambios") == true){
            const csrf = document.getElementById('_csrf').value;
            let rutaModificar_t = '../modificar/' + document.getElementById("id_tp").value;
            let contador  = document.getElementById("cont").value;
            let actuales = [];
            
            for(let i = 0; i <= contador; i++){
                actuales.push(document.getElementById("ACT_"+i).value)
            }

    
            let data = {
                Nombre_Tipo_Incidencia: document.getElementById("Nombre_Tipo_Incidencia").value,
                SLA: document.getElementById("SLA").value,
                Preguntas: document.querySelector('[data-id="select_preguntas"]').title.split(", "),
                Actuales: actuales

            }
    
            fetch(rutaModificar_t, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'csrf-token': csrf
                },
                body:JSON.stringify(data)
                
            })
            .then(() => {
                window.alert("cambios guardados")
                window.location = "/tipo_incidencia";

            }).catch(err => {
                console.log(err);
            });
        }
    }else{
        window.alert("datos incompletos")
    }
}

function visibilidad(id_tipo_incidencia){
    const csrf = document.getElementById('_csrf').value;
    let eliminarRuta = '../eliminar_tipo_incidencia/' + id_tipo_incidencia;

    let data = {
        id_tp: id_tipo_incidencia
    }

    fetch(eliminarRuta, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
        
    })
    .then(() => {
        Swal.fire(
            '¡Operacion Exitosa!',  
            'Tipo de incidencia eliminado correctamente',
            'success'
          )
          .then(response => {
            window.location = "/tipo_incidencia";
          })
    }).catch(err => {
        console.log(err);
    });
}

