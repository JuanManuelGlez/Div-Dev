document.getElementById("select_rol").onchange = () =>
{
    let value = document.getElementById("select_rol").value;

    let rutaPrivilegios = '../getPrivilegios/' + value;

    fetch(rutaPrivilegios, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        privilegio_select.innerHTML = '';
        privilegio_select.innerHTML += '<table class = "table table-bordered"><thead><tr><th scope="col"> Privilegio </th><th scope="col"> Check </th></tr></thead><tbody id="table_privilegios">';
        
        for(let privilegio of response.allprivilegios)
        {
            document.getElementById("table_privilegios").innerHTML += '<tr> <td>' + privilegio.Nombre_Privilegio + ' </td> <td> <input type="checkbox" id='+ (privilegio.Nombre_Privilegio).replace(/\s/g,'_')+' name='+(privilegio.Nombre_Privilegio).replace(/\s/g,'')+' value='+privilegio.Nombre_Privilegio+' onchange="privilegioChange(this, '+privilegio.Id_Privilegio+')"> </td></tr>'
        }
        privilegio_select.innerHTML += '</tbody>';
        privilegio_select.innerHTML += '</table>';

        for(let privilegio of response.privilegiosact){
            document.getElementById((privilegio.Nombre_Privilegio).replace(/\s/g,'_')).setAttribute('checked',true);
        }

    }).catch(err => {
        console.log(err);
    });
    
}

function privilegioChange(element, id_privilegio) {

    const csrf = document.getElementById('_csrf').value;
    id_rol = document.getElementById("select_rol").value;
    
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