
function Modificacion()
{
    let cambiar_procedencia = document.getElementById("cambiar_procedencia");
    let idProcedencia = document.getElementById("procedencia").value; 
    let rutaProcedencia = '../procedencia/procedencia_f/'+idProcedencia;
    cambiar_procedencia.innerHTML ='';

    fetch(rutaProcedencia,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    .then(response => {
        let procedencia=response.procedencias;
        if (procedencia[0].Visibilidad_Procedencia.data[0] == 1){
            var visibile="Visible";
            var visibile2=["No visible",0];
        }else if(procedencia[0].Visibilidad_Procedencia.data[0]==0){
            var visibile=" No Visible";
            var visibile2=["Visible",1];
        }
        cambiar_procedencia.innerHTML += '<input id="nombre" name="nombre" value="'+procedencia[0].Nombre_Procedencia+'"></input><br>';
        cambiar_procedencia.innerHTML += '<select class="form-select" id="visibilidad" name="visibilidad" aria-label="Default select example"> <option selected value="'+ procedencia[0].Visibilidad_Procedencia.data[0] +'">' + visibile +'</option> <option value="'+ visibile2[1] +'"> '+visibile2[0]+'</option></select>';
        
       
    }).catch(err => {
        console.log(err);
    });
    
}