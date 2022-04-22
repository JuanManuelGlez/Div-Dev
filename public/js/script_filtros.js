document.getElementById("filtrar").onclick = () =>
{
    let filtro = document.getElementById("filtro").value;
    let display = document.getElementById("filtro_ver");
    const csrf = document.getElementById('_csrf').value;
    let ruta = '../tickets/filtros'
    data = {
        estado : filtro
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
  
    display.innerHTML = "";
    for(let ticket of response.tickets)
        {
            var style = ticket.Id_Estado == 1 ? "color: grey" :  ticket.Id_Estado  == 2 ? "color: yellow"  :  ticket.Id_Estado == 3 ? "color: green" : ticket.Id_Estado  == 4 ? "color: red" :  ticket.Id_Estado  == 5 ? "color: purple" : "color : black" 
            display.innerHTML += '<div  onClick="openTicket(this)" data-bs-toggle="modal" data-bs-target="#myModal" id=" boton' + ticket.Id_Ticket + '" class="col-3" style="cursor:pointer;margin-bottom:20px;"> <div class="card h-100" style="overflow: hidden;margin-top:10px;margin-bottom:10px;box-shadow: 1px 4px 8px rgba(0,0,0,0.46);"> <div class="card-body" style="text-align: left;width: 262px;overflow: hidden;"> <h4 class="card-title" style="overflow: hidden;color: rgb(0,0,0);text-align: left;"> #' + ticket.Id_Ticket + ':' + ticket.Asunto + '</h4> <h6 class="text-muted card-subtitle mb-2" style="overflow: hidden;color: rgb(0,0,0);">' + ticket.Descripcion.substring(0, 20) +'... </h6> <i class="fa fa-circle" style="'+ style +'" ></i> <span style="overflow: hidden;margin-left: 10px;color: rgb(136,136,136);">Creado el' + (ticket.Fecha_Inicio.toString()).substring(4, 21) + '</span> </div> </div> </div>'
        }



                        





}).catch(err => {
    console.log(err);
});
}