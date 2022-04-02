var cont = 1;
add_pregunta = document.getElementById("add_pregunta");

document.getElementById("Nueva_Pregunta").onclick = () =>
{
    console.log("texto");
    add_pregunta.innerHTML += '<br> <input type="text" id="pregunta_nueva_text'+ cont +'" name="pregunta_nueva_text'+ cont +'" placeholder="Escribe aqui..."> <br>';
    add_pregunta.innerHTML += '';
    cont++;
}