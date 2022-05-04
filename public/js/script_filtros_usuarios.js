
document.getElementById('input_busqueda').onkeyup = buscaUsuario;

function buscaUsuario() {
  
    const csrf = document.getElementById('_csrf').value;
    const nuevoUsuario = document.getElementById("input_busqueda").value
    let ruta = '../usuario/getLike';
    let display = document.getElementById("display");

    data = {
        buscaUsuario: nuevoUsuario
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
        display.innerHTML = ''

        for(let usuario of response.usuarios)
        {
            display.innerHTML +=
            '<div id="'+ usuario.Id_Usuario + '" onClick="openUsuario(this)" data-bs-toggle="modal" data-bs-target="#myModal" class="row" style="cursor: pointer;margin: 20px -12px;border-radius: 5px;box-shadow: 0px 0px 9px rgba(147,147,147,0.55);padding: 5px;"> <div class="col" style="font-size: 22px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Nombre_Usuario+'</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Login + '</span></div><div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">' + usuario.Nombre_Rol + '</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">' + usuario.Total + '</span></div></div>'
            
        }
    }).catch(err => {
        console.log(err);
    });
};

document.getElementById("filtro_rol").onchange = () =>
{
    let f_rol = document.getElementById("filtro_rol").value
    
    let display = document.getElementById("display")
    
    const csrf = document.getElementById('_csrf').value;
    let ruta = '../usuario/filtros'
    
    data = {
        rol: f_rol
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
        console.log(response)
        let i = 0;
        for (let usuario of response.usuarios) {
         if(usuario.Tickets = 1 && response.totales != 0){
            display.innerHTML +=
            '<div id="'+ usuario.Id_Usuario + '" onClick="openUsuario(this)" data-bs-toggle="modal" data-bs-target="#myModal" class="row" style="cursor: pointer;margin: 20px -12px;border-radius: 5px;box-shadow: 0px 0px 9px rgba(147,147,147,0.55);padding: 5px;"> <div class="col" style="font-size: 22px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Nombre_Usuario+'</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Login + '</span></div><div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">' + usuario.Nombre_Rol + '</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">' + response.totales[i].Total + '</span></div></div>'
            i++;
         }
         else{
            display.innerHTML +=
            '<div id="'+ usuario.Id_Usuario + '" onClick="openUsuario(this)" data-bs-toggle="modal" data-bs-target="#myModal" class="row" style="cursor: pointer;margin: 20px -12px;border-radius: 5px;box-shadow: 0px 0px 9px rgba(147,147,147,0.55);padding: 5px;"> <div class="col" style="font-size: 22px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Nombre_Usuario+'</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">'+ usuario.Login + '</span></div><div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);">' + usuario.Nombre_Rol + '</span></div> <div class="col" style="font-size: 21px;text-align: center;"><span style="color: rgb(0,0,0);"> 0 </span></div></div>'
            i++;
         }
          
        }
    }).catch(err => {
        console.log(err);
    });
}
