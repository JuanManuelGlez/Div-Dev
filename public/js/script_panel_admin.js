
function filtraLabels() {
    const csrf = document.getElementById('_csrf').value;
    const nuevaLabel = document.getElementById("input_label").value
    let rutaLabels = '../label/getLike';

    data = {
        buscaLabel: nuevaLabel
    }

    fetch(rutaLabels, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById("tablaLabels").innerHTML = '';
        document.getElementById("existeLabel").value = 0;
        for(label of response.labels)
        {
            if(nuevaLabel == label.Id_label)
                document.getElementById("existeLabel").value = 1;

            if(label.Visibilidad_Label == 1)
            {
                document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td><td>Si <button id="elimina' + label.Id_Label + '" type="button" class="btn btn-secondary btn-sm float-end" style="height: 30px;" onclick="eliminaLabel(this)">X</button></td>';
            }
            else
            {
                document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td><td>No <button id="elimina' + label.Id_Label + '" type="button" class="btn btn-secondary btn-sm float-end" style="height: 30px;" onclick="eliminaLabel(this)">O</button></td>';
            }
            
            document.getElementById("tablaLabels").innerHTML += '</tr>';
        }
    }).catch(err => {
        console.log(err);
    });
};

function agregaLabel() {
    const csrf = document.getElementById('_csrf').value;
    const nuevaLabel = document.getElementById("input_label").value
    let rutaAgregar = '../label/nuevaLabel';

    data = {
        Id_Label: nuevaLabel
    }

    fetch(rutaAgregar, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {

        if(document.getElementById("existeLabel").value == "0")
        {
            document.getElementById("tablaLabels").innerHTML += '<tr><td>' + nuevaLabel +  '</td><td>Si <button id="elimina' + label.Id_Label + '" type="button" class="btn btn-secondary btn-sm float-end" style="height: 30px;" onclick="eliminaLabel(this)">X</button></td></tr>';
            document.getElementById("existeLabel").value = 1;
        }
        
    }).catch(err => {
        console.log(err);
    });
};

function eliminaLabel(element) {
    const csrf = document.getElementById('_csrf').value;
    let rutaActualiza = '../label/actualizaLabel';
    
    let label = element.id.substring(7);
    let nuevaVis = 0;

    if(element.parentNode.innerHTML.substring(0, 2) == 'No')
    {
        nuevaVis = 1;
    }

    data = {
        Id_Label: label,
        nuevaVisibilidad: nuevaVis
    }
    fetch(rutaActualiza, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        
        if(nuevaVis == 0)
        {
            element.parentNode.innerHTML = "No" + element.parentNode.innerHTML.substring(2);
            $('body').find('#' + element.id).html('O');
        }
        else
        {
            element.parentNode.innerHTML = "Si" + element.parentNode.innerHTML.substring(2);
            $('body').find('#' + element.id).html('X');
        }
        
    }).catch(err => {
        console.log(err);
    });
};

document.getElementById('abreLabels').addEventListener('mousedown', async function (e) {
    let contenido = document.getElementById("contenido_labels");
    $('#accordionExample').css('height', 'auto');
    let rutaLabels = '../label/getAll';
        
    contenido.innerHTML = '';
    await fetch(rutaLabels, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        contenido.innerHTML += `
        <table class="table table-bordered" >
        <thead>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Visible?</th>
        </tr>
        </thead>
        <tbody id="tablaLabels">
        `;
        for(label of response.labels)
        {
            if(label.Visibilidad_Label == 1)
            {
                document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td><td>Si <button id="elimina' + label.Id_Label + '" type="button" class="btn btn-secondary btn-sm float-end" style="height: 30px;" onclick="eliminaLabel(this)">X</button></td>';
            }
            else
            {
                document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td><td>No <button id="elimina' + label.Id_Label + '" type="button" class="btn btn-secondary btn-sm float-end" style="height: 30px;" onclick="eliminaLabel(this)">O</button></td>';
            }
            
            document.getElementById("tablaLabels").innerHTML += '</tr>';
        }
        contenido.innerHTML += `
        </tbody>
        </table>
        <form id="form_nuevo_label" method="POST">
        <input type="hidden" id="__csrf" name="_csrf" value="<%= csrfToken %>">
        <div class="row" style="padding: 15px 0px;">
            <div class="col-xxl-4"><label  class="col-form-label text-dark">Agregar</label></div>
        <div class="col"><input id="input_label" name="input_label" class="form-control" type="text" maxlength="30"></div>
        <div class="col"><button type="button" id="agrega_label" class="btn btn-success">  Agregar </button></div>
        <input type="hidden" id="existeLabel" name="existeLabel" value="0">
        </form>`;

        document.getElementById('input_label').onkeyup = filtraLabels;
        document.getElementById('agrega_label').onclick = agregaLabel;
        
    }).catch(err => {
        console.log(err);
    });
}, true);

function filtraEstados() {
    const csrf = document.getElementById('_csrf').value;
    const nuevoEstado = document.getElementById("input_estado").value
    let rutaEstados = '../estado/getLike';

    data = {
        buscaEstado: nuevoEstado
    }

    fetch(rutaEstados, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById("tablaEstados").innerHTML = '';
        document.getElementById("existeEstado").value = 0;
        for(estado of response.estados)
        {
            if(nuevoEstado == estado.Nombre_Estado)
                document.getElementById("existeEstado").value = 1;

                if(estado.Visibilidad_Estado == 1)
                {
                    document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Nombre_Estado +  '</td><td>Si</td>';
                }
                else
                {
                    document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Nombre_Estado +  '</td><td>No</td>';
                }
                
                document.getElementById("tablaEstados").innerHTML += '</tr>';
        }

    }).catch(err => {
        console.log(err);
    });
};

function agregaEstado() {
    const csrf = document.getElementById('_csrf').value;
    const nuevoEstado = document.getElementById("input_estado").value
    let rutaAgregar = '../estado/nuevoEstado';

    data = {
        Nombre_Estado: nuevoEstado
    }

    fetch(rutaAgregar, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {

        if(document.getElementById("existeEstado").value == "0")
        {
            document.getElementById("tablaEstados").innerHTML += '<tr><td>' + nuevoEstado +  '</td>' + '<td>Si</td></tr>';
            document.getElementById("existeEstado").value = 1;
        }
        
    }).catch(err => {
        console.log(err);
    });
};

document.getElementById('abreEstados').addEventListener('mousedown', async function (e) { //Esto no se v a aquedar asi pero no se como arreglar un problema con el collapse
    let contenido = document.getElementById("contenido_estados");
    $('#accordionExample').css('height', 'auto');
    let rutaEstados = '../estado/getAll';
        
    contenido.innerHTML = '';
    await fetch(rutaEstados, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        contenido.innerHTML += `
        <table class="table table-bordered" >
        <thead>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Visible?</th>
        </tr>
        </thead>
        <tbody id="tablaEstados">
        `;
        for(estado of response.estados)
        {
            if(estado.Visibilidad_Estado == 1)
            {
                document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Nombre_Estado +  '</td><td>Si</td>';
            }
            else
            {
                document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Nombre_Estado +  '</td><td>No</td>';
            }
            
            document.getElementById("tablaEstados").innerHTML += '</tr>';
        }
        contenido.innerHTML += `
        </tbody>
        </table>
        
        <form id="form_nuevo_estado method="POST">
        <input type="hidden" id="__csrf" name="_csrf" value="<%= csrfToken %>">
        <div class="row" style="padding: 15px 0px;">
            <div class="col-xxl-4"><label  class="col-form-label text-dark">Nuevo Estado</label></div>
        <div class="col"><input id="input_estado" name="input_estado" class="form-control" type="text" maxlength="30" ></div>
        <div class="col"><button type="button" id="agrega_estado" class="btn btn-success">  Agregar </button></div>
        <input type="hidden" id="existeEstado" name="existeEstado" value="0">
        </form>`;

        document.getElementById('input_estado').onkeyup = filtraEstados;
        document.getElementById('agrega_estado').onclick = agregaEstado;
        
    }).catch(err => {
        console.log(err);
    });
}, true);


function agregarProcedencia() {
    const csrf = document.getElementById('_csrf').value;
    const nuevaProcedencia = document.getElementById("Nombre_Procedencia").value
    let rutaAgregar = '../procedencia/procedencia_f';
    console.log(document.getElementById("Nombre_Procedencia"))
    data = {
        Nombre_Procedencia: nuevaProcedencia
    }

    fetch(rutaAgregar, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        let opt = document.createElement('option');
        opt.value = response.id_nueva_procedencia;
        opt.innerHTML = nuevaProcedencia;
        console.log(opt);
        document.getElementById("procedencia").appendChild(opt);
        document.getElementById("Nombre_Procedencia").value = '';
           
    }).catch(err => {
        console.log(err);
    });
};


function modificarProcedencia() {
    const csrf = document.getElementById('_csrf').value;
    const nuevaProcedencia = document.getElementById("procedencia").value
    let rutaAgregar = '../procedencia/procedencia_f/update';
    const nuevoNombre = document.getElementById("nombre").value
    const nuevaVisibilidad=document.getElementById("visibilidad").value
    console.log(nuevoNombre);
    data = {
        procedencia:  nuevaProcedencia,
        nombre: nuevoNombre,
        visibilidad: nuevaVisibilidad
    }

    fetch(rutaAgregar, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
           
        
    }).catch((err) => {
        console.log(err);
    });
};

document.getElementById('abreProcedencia').addEventListener('mousedown', async function (e) { //Esto no se v a aquedar asi pero no se como arreglar un problema con el collapse
    let contenido = document.getElementById("contenido_procedencia");
    $('#accordionExample').css('height', 'auto');
    let rutaProcedencia = '../procedencia/procedencia_f';
        
    contenido.innerHTML = '';
    await fetch(rutaProcedencia, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.procedencias)
        contenido.innerHTML += `
        
        <form id="nueva_procedencia" method="POST">
        <input type="hidden" id="__csrf" name="_csrf" value="<%= csrfToken %>"></input>
        <div id="Nombre_Procedenciaa">
            <label for="Nombre_Procedencia">Nombre de Nueva Procedencia: </label>
            <input type="text" id="Nombre_Procedencia" name="Nombre_Procedencia" placeholder="assdasdasdsa" minlength="3">
        </div>    
        <button type="button" id="agrega_procedencia" class="btn btn-success" onclick="agregarProcedencia()">Agregar </button>
        </form>`;
        console.log(document.getElementById("agrega_procedencia"))
        document.getElementById("agrega_procedencia").onclick = agregarProcedencia;
        

        contenido.innerHTML += `
            <form id="modificar_procedencia" action="/procedencia/procedencia_f/update" method="POST">
            <input type="hidden" name="_csrf" id="_csrf" value="<%= csrfToken %>"></input>
            <select class="form-select" id="procedencia" name="procedencia" aria-label="Default select example">
                <option selected disabled>Seleccion Procedencia</option>`;

                 for ( procedencia of response.procedencias){
                       document.getElementById('procedencia').innerHTML+='<option value="'+procedencia.Id_Procedencia+'">'+procedencia.Nombre_Procedencia+'</option>';
                    }
        contenido.innerHTML+=
            `</select>
            <div id="cambiar_procedencia"></div>
            <button type="button" id="modificar_procedencias" class="btn btn-success"> Enviar </button>
            </form>
        `;
        document.getElementById('procedencia').onchange = Modificacion;
        document.getElementById('modificar_procedencias').onclick = modificarProcedencia;
        
    }).catch(err => {
        console.log(err);
    });
}, true);

/*
document.getElementById('collapseThree').addEventListener('show.bs.collapse', async function (e) {
    let contenido = document.getElementById("contenido_estados");
    let rutaEstados = '../estado/getAll';

    contenido.innerHTML = '';
    await fetch(rutaEstados, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        contenido.style.height = response.estados.length*20 + 300 + "px";
        console.log(contenido.style.height);
        //agrega_contenido_estados();

        
        contenido.innerHTML += `
        <table class="table table-bordered" >
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
        </tr>
        </thead>
        <tbody id="tablaEstados">
        `;
        for(estado of response.estados)
        {
            document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Id_Estado +  '</td>' + '<td>' + estado.Nombre_Estado +  '</td></tr>';
        }
        contenido.innerHTML += `
        </tbody>
        </table>
        <button class="btn btn-primary" type="button" style="background: rgb(0,0,0);width: 100%;margin-top: 40px;">Crear Nuevo Estado<i class="fa fa-user-plus" style="margin-left: 15px;"></i></button>
        <div class="row" style="padding: 15px 0px;">
            <div class="col-xxl-4"><label  class="col-form-label text-dark">Asunto</label></div>
        <div class="col"><input id="asunto" name="asunto" class="form-control" type="text"></div>
        <div class="col"><button id="agrega_estado" class="btn btn-success">  Agregar </button></div>`;
        
    }).catch(err => {
        console.log(err);
    });

});

*/
