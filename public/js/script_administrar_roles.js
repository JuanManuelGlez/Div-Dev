document.getElementById("enviar_rol").onclick = () => {
    const csrf = document.getElementById('_csrf').value; 
    let rutaCreaRol = '../CreaRol';

    data = {
        Nombre_Rol: document.getElementById("nuevo_rol").value
    }
    fetch(rutaCreaRol, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        Swal.fire(
            '¡Operación Exitosa!',  
            'rol creado exitosamente',
            'success'
          )
          .then(response => {
            window.location.reload();
          })

    }).catch(err => {
        console.log(err);
    });
}

function privilegioChange(element, id_privilegio, id_rol) {

    const csrf = document.getElementById('_csrf').value;    
    if(element.getAttribute('checked') == 'true'){

        element.removeAttribute('checked');
        let rutaEliminaPriv = '../EliminaPrivilegio';


        data = {
            Rol: id_rol,
            Id_Privilegio: id_privilegio
        }
            fetch(rutaEliminaPriv, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'csrf-token': csrf
                },
                body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => {
                toast('Operacion completada')
    
            }).catch(err => {
                console.log(err);
            });
        }else{

        element.setAttribute('checked', true);
        let rutaAgregaPriv = '../AgregaPrivilegio';

        data = {
            Rol: id_rol,
            Id_Privilegio: id_privilegio
        }
            fetch(rutaAgregaPriv, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'csrf-token': csrf
                },
                body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => {
                toast('Operacion completada')


            }).catch(err => {
                console.log(err);
            });
        }
}

function Modificarrol(rol){
    document.getElementById("textinput_mod"+rol).innerHTML = '<td scope="col"> <input class="form-control" type="text" id="text_'+rol+'" name="text_'+rol+'" value="'+(rol.replace(/_/g," "))+'" onkeydown="creabotonguardar(this)"></td>';
};

function creabotonguardar(element){
    document.getElementById("eliminar_hide"+(element.id.slice(5))).innerHTML = "";
    document.getElementById("modificar_hide"+(element.id.slice(5))).innerHTML = "";
    document.getElementById("cambios"+(element.id.slice(5))).innerHTML = '<button id="guardar_'+(element.id.slice(5))+'" class="btn btn-primary btn-sm float-end " type="button" style="height: 30px; width: 200px; margin-left:20px; margin-right:20px; background: rgb(0,0,0); border:rgb(0,0,0); " onclick="guardarrol(this)">Guardar Cambios</button></td>';
};

function guardarrol(element){

    const csrf = document.getElementById('_csrf').value;    
    let rutaModificaRol = '../ModificaRol';

    let id = "text_"+(element.id).slice(8);
        data = {
            Rol: (element.id).slice(8).replace(/_/g," "),
            Nuevo: document.getElementById(id).value
        }
        fetch(rutaModificaRol, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
            .then(response => {
                Swal.fire(
                    '¡Operación Exitosa!',  
                    'rol modificado exitosamente',
                    'success'
                  )
                  .then(response => {
                    window.location.reload();
                  })
    
            }).catch(err => {
                console.log(err);
            });
}

function eliminarol(element){

    const csrf = document.getElementById('_csrf').value;    
    let rutaEliminaRol = '../EliminaRol';
    let rol = ((element.id).slice(9)).replace(/_/g," ");

        data = {
            Rol: rol
        }
        fetch(rutaEliminaRol, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
            .then(response => {

                if(response.cont == 1){
                    Swal.fire(
                        '¡Operación Exitosa!',  
                        'rol eliminado exitosamente',
                        'success'
                      )
                      .then(response => {
                        window.location.reload();
                      })
                }else{
                    Swal.fire('Este rol no se puede borrar')
                }
    
            }).catch(err => {
                console.log(err);
            });
}