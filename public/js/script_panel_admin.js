
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

            document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td></tr>';
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
            document.getElementById("tablaLabels").innerHTML += '<tr><td>' + nuevaLabel +  '</td></tr>';
            document.getElementById("existeLabel").value = 1;
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
        </tr>
        </thead>
        <tbody id="tablaLabels">
        `;
        for(label of response.labels)
        {
            document.getElementById("tablaLabels").innerHTML += '<tr><td>' + label.Id_Label +  '</td></tr>';
        }
        contenido.innerHTML += `
        </tbody>
        </table>
        <form id="form_nuevo_label method="POST">
        <input type="hidden" id="__csrf" name="_csrf" value="<%= csrfToken %>">
        <div class="row" style="padding: 15px 0px;">
            <div class="col-xxl-4"><label  class="col-form-label text-dark">Agregar</label></div>
        <div class="col"><input id="input_label" name="input_label" class="form-control" type="text" maxlength="30"></div>
        <div class="col"><button type="button" id="agrega_label" class="btn btn-success">  Agregar </button></div>
        <input type="hidden" id="existeLabel" name="existeLabel" value="0"></form>`;

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

            document.getElementById("tablaEstados").innerHTML += '<tr><td>' + estado.Id_Estado +  '</td>' + '<td>' + estado.Nombre_Estado +  '</td></tr>';
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
            document.getElementById("tablaEstados").innerHTML += '<tr><td>' + response.idNuevo +  '</td>' + '<td>' + nuevoEstado +  '</td></tr>';
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
        <form id="form_nuevo_estado method="POST">
        <input type="hidden" id="__csrf" name="_csrf" value="<%= csrfToken %>">
        <div class="row" style="padding: 15px 0px;">
            <div class="col-xxl-4"><label  class="col-form-label text-dark">Asunto</label></div>
        <div class="col"><input id="input_estado" name="input_estado" class="form-control" type="text"></div>
        <div class="col"><button type="button" id="agrega_estado" class="btn btn-success">  Agregar </button></div>
        <input type="hidden" id="existeEstado" name="existeEstado" value="0"></form>`;

        document.getElementById('input_estado').onkeyup = filtraEstados;
        document.getElementById('agrega_estado').onclick = agregaEstado;
        
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
