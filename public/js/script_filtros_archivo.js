document.getElementById('input_busqueda').onkeyup = buscaTicket;

document.getElementById("dropdown_filter_backlog").onclick = () =>
{
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_prioridad = document.getElementById("filtro_prioridad").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_estado = 1
    let f_procedencia = document.getElementById("filtro_procedencia").value
    let content = document.getElementById("content_filtro")

    const csrf = document.getElementById('_csrf').value;
    let ruta = '../tickets/filtros_backlog'

    data = {
        prioridad : f_prioridad,
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        estado: f_estado,
        procedencia: f_procedencia
    }

    fetch(ruta,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        }
    ,body:JSON.stringify(data)
    })
    .then(response => response.json())
        .then(response => {
    
        content.innerHTML = '';
 
       
        for(let ticket of response.tickets)
        {
            let fecha_inicio = "";
            let fecha_inicio_ = new Date(ticket.Fecha_Inicio);
            fecha_inicio = fecha_inicio_.toString().substring(4,21);
            if(ticket.Id_Estado == 1){
                var style = ticket.Id_Estado == 1 ? "color: grey" :  ticket.Id_Estado  == 2 ? "color: yellow"  :  ticket.Id_Estado == 3 ? "color: green" : ticket.Id_Estado  == 4 ? "color: red" :  ticket.Id_Estado  == 5 ? "color: purple" : "color : black" 
                content.innerHTML += '<div  onClick="openTicket(this)" data-bs-toggle="modal" data-bs-target="#myModal" id=" boton' + ticket.Id_Ticket + '" class="col-3" style="cursor:pointer;margin-bottom:20px;"> <div class="card h-100" style="overflow: hidden;margin-top:10px;margin-bottom:10px;box-shadow: 1px 4px 8px rgba(0,0,0,0.46);"> <div class="card-body" style="text-align: left;width: 262px;overflow: hidden;"> <h4 class="card-title" style="overflow: hidden;color: rgb(0,0,0);text-align: left;"> #' + ticket.Id_Ticket + ':' + ticket.Asunto + '</h4> <h6 class="text-muted card-subtitle mb-2" style="overflow: hidden;color: rgb(0,0,0);">' + ticket.Descripcion.substring(0, 20) +'... </h6> <i class="fa fa-circle" style="'+ style +'" ></i> <span style="overflow: hidden;margin-left: 10px;color: rgb(136,136,136);">Creado ' + fecha_inicio + '</span> </div> </div> </div>'    
            }
        }

    }).catch(err => {
        console.log(err);
    });
}

function buscaTicket() {
    const csrf = document.getElementById('_csrf').value;
    const nuevaTicket = document.getElementById("input_busqueda").value
    let ruta = '../tickets/getLike';
    let content = document.getElementById("content_filtro");

    data = {
        buscaTicket: nuevaTicket
    }

    fetch(ruta, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        content.innerHTML = ''

        for(let ticket of response.tickets)
        {
            let fecha_inicio = "";
            let fecha_inicio_ = new Date(ticket.Fecha_Inicio);
            fecha_inicio = fecha_inicio_.toString().substring(4,21);
            if(ticket.Archivado == 0 && ticket.Id_Estado == 1){
                var style = ticket.Id_Estado == 1 ? "color: grey" :  ticket.Id_Estado  == 2 ? "color: yellow"  :  ticket.Id_Estado == 3 ? "color: green" : ticket.Id_Estado  == 4 ? "color: red" :  ticket.Id_Estado  == 5 ? "color: purple" : "color : black" 
                content.innerHTML += '<div  onClick="openTicket(this)" data-bs-toggle="modal" data-bs-target="#myModal" id=" boton' + ticket.Id_Ticket + '" class="col-3" style="cursor:pointer;margin-bottom:20px;"> <div class="card h-100" style="overflow: hidden;margin-top:10px;margin-bottom:10px;box-shadow: 1px 4px 8px rgba(0,0,0,0.46);"> <div class="card-body" style="text-align: left;width: 262px;overflow: hidden;"> <h4 class="card-title" style="overflow: hidden;color: rgb(0,0,0);text-align: left;"> #' + ticket.Id_Ticket + ':' + ticket.Asunto + '</h4> <h6 class="text-muted card-subtitle mb-2" style="overflow: hidden;color: rgb(0,0,0);">' + ticket.Descripcion.substring(0, 20) +'... </h6> <i class="fa fa-circle" style="'+ style +'" ></i> <span style="overflow: hidden;margin-left: 10px;color: rgb(136,136,136);">Creado ' + fecha_inicio + '</span> </div> </div> </div>'
            }
        }
    }).catch(err => {
        console.log(err);
    });
};

document.getElementById("reset_filtros").addEventListener('click', function (e) {

    document.getElementById("form_filtros").reset();
    document.getElementById("dropdown_filter_backlog").click();
    e.stopImmediatePropagation();
});