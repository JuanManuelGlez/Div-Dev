
function ModificacionEstado()
{
    let cambiar_estado = document.getElementById("cambiar_estado");
    let idEstado = document.getElementById("estado").value; 
    let rutaEstado = '../estado/'+idEstado;
    cambiar_estado.innerHTML ='';
    fetch(rutaEstado,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    .then(response => {
        let estado=response.estados;
        if (estado[0].Visibilidad_Estado== 1){
            var visibile="Visible";
            var visibile2=["No visible",0];
        }else if(estado[0].Visibilidad_Estado==0){
            var visibile=" No Visible";
            var visibile2=["Visible",1];
        }
        cambiar_estado.innerHTML += '<input id="nombre" name="nombre" value="'+estado[0].Nombre_Estado+'"></input><br>';
        cambiar_estado.innerHTML += '<select class="form-select" id="visibilidad" name="visibilidad" aria-label="Default select example"> <option selected value="'+ estado[0].Visibilidad_Estado+'">' + visibile +'</option> <option value="'+ visibile2[1] +'"> '+visibile2[0]+'</option></select>';
       
    }).catch(err => {
        console.log(err);
    });
    
}