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
        document.getElementById("nuevo_rol").value = "";
        alert('Operacion completada')

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
                alert('Operacion completada')
    
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
                alert('Operacion completada')


            }).catch(err => {
                console.log(err);
            });
        }
    }