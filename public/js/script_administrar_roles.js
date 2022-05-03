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
        privilegio_select.innerHTML+='<div><table> '
        for(let privilegio of response.allprivilegios)
        {
            privilegio_select.innerHTML+='<tr><td>'

            privilegio_select.innerHTML += '<input type="checkbox" id='+ (privilegio.Nombre_Privilegio).replace(/\s/g,'_')+' name='+(privilegio.Nombre_Privilegio).replace(/\s/g,'_')+' value='+privilegio.Nombre_Privilegio+' onchange="privilegioChange(this, '+privilegio.Id_Privilegio+')">';
            privilegio_select.innerHTML+='</td>'
            privilegio_select.innerHTML+='<td>'
            privilegio_select.innerHTML += '<label for='+ (privilegio.Nombre_Privilegio).replace(/\s/g,'_')+'>'+ privilegio.Nombre_Privilegio+'</label><br></br>'
            privilegio_select.innerHTML+='</td>'
            privilegio_select.innerHTML+='</td>'
        }
        privilegio_select.innerHTML+='</table> </div>'
        
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