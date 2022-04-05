
var cont = 0;
add_pregunta = document.getElementById("add_pregunta");
array_preguntas = [];
contador = document.getElementById("contador_preguntas").value;


document.getElementById("Nueva_Pregunta").onclick = () =>
{
    if(cont == 0){
        add_pregunta.innerHTML += '<br> <input type="text" id="pregunta_nueva_text'+ cont +'" name="pregunta_nueva_text'+ cont +'" placeholder="Escribe aqui...">';
        add_pregunta.innerHTML += '<select onchange="getval('+cont+');" class="form-select" id="select_preguntas'+cont+'" name="select_preguntas'+cont+'" aria-label="Default select example"><option selected disabled>Preguntas:</option>';
        for(let i= 0; i <= contador; i++){
            document.getElementById('select_preguntas'+cont).options.add(new Option(document.getElementById('Preguntas'+i).value,document.getElementById('Preguntas'+i).value));
        }
        add_pregunta.innerHTML += '</select><br>';
        cont++;

    }else{
        array_preguntas.push(document.getElementById('pregunta_nueva_text' + (cont-1)).value);

        for(let i= 0; i < cont-1; i++){
            array_preguntas[i] = document.getElementById('pregunta_nueva_text' + i).value;
        }

        add_pregunta.innerHTML += '<br> <input type="text" id="pregunta_nueva_text'+ cont +'" name="pregunta_nueva_text'+ cont +'" placeholder="Escribe aqui..."> <br>';

        add_pregunta.innerHTML += '<select onchange="getval('+cont+');" class="form-select" id="select_preguntas'+cont+'" name="select_preguntas'+cont+'" aria-label="Default select example"><option selected disabled>Preguntas:</option>';
        for(let i= 0; i <= contador; i++){
            document.getElementById('select_preguntas'+cont).options.add(new Option(document.getElementById('Preguntas'+i).value, document.getElementById('Preguntas'+i).value));
        }
        add_pregunta.innerHTML += '</select><br>';

        for(let i= 0; i < cont; i++){
            document.getElementById('pregunta_nueva_text' + i).value = array_preguntas[i];
        }

        cont++;
    }

    document.getElementById("contador_nuevas").value = cont-1;
}

function getval(a)
{
    document.getElementById('pregunta_nueva_text'+a).value = document.getElementById('select_preguntas'+a).value;
    document.getElementById('select_preguntas'+a).value = "Preguntas:";
}