
let porEstados;
let porTipoIncidencia;
let porProcedencia;
let porResolucion;

function allByEstado()
{
    let rutaTickets = '../metricas/getByStatusAll';
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_fecha_inicio = document.getElementById("fecha_inicio").value
    let f_fecha_fin = document.getElementById("filtro_tipo_incidencia").value
    const csrf = document.getElementById('_csrf').value;

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin
    }

    fetch(rutaTickets, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        let datosTickets = [];
        let labels = [];
        let bg = ['#059589', '#3ca195', '#5aaca2', '#74b8af', '#8cc4bc', '#a3d0c9', '#badbd6', '#d1e7e4', '#e8f3f1', '#ffffff'];

        for(dato of response.datos)
        {
            labels.push(dato.Estado);
            datosTickets.push(dato.Tickets);
        }
        
        const data = {
            labels: labels,
            datasets: [{
                label: 'Tickets por estado',
                backgroundColor: bg.slice(0, labels.length),
                borderColor: bg.slice(0, labels.length),
                data: datosTickets,
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            plugins: [ChartDataLabels],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    x: {
                        max: Math.max.apply(null, datosTickets)+3,
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                    }
                },
                indexAxis: 'y',
                plugins: {
                    datalabels: {
                        color: '#000000',
                        anchor: 'end',
                        align: 'right',
                        offset: 10,
                        font: {
                            weight: 'bold',
                            size: 10,
                        }
                    }
                }                
            }
        };
        
        porEstados = new Chart(
            document.getElementById('porEstados'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}

function allByProcedencia()
{
    let rutaTickets = '../metricas/getByProcedenciaAll';

    fetch(rutaTickets, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        let datosTickets = [];
        let labels = [];
        let bg = ['#a900d3', '#b53ad8', '#c158de', '#cc72e3', '#d68be8', '#dfa2ed','#e8b9f2', '#f0d1f6', '#f8e8fb'];

        for(dato of response.datos)
        {
            labels.push(dato.Procedencia);
            datosTickets.push(dato.Tickets);
        }
        
        const data = {
            labels: labels,
            datasets: [{
                label: 'Tickets por procedencia',
                backgroundColor: bg.slice(0, labels.length),
                borderColor: bg.slice(0, labels.length),
                data: datosTickets,
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            plugins: [ChartDataLabels],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                scales: {
                    x: {
                        max: Math.max.apply(null, datosTickets)+3,
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                },
                indexAxis: 'y',
                plugins: {
                    datalabels: {
                        color: '#000000',
                        anchor: 'end',
                        align: 'right',
                        offset: 10,
                        font: {
                            weight: 'bold',
                            size: 10,
                        }
                    }
                }                 
            }
        };
        
        porProcedencia = new Chart(
            document.getElementById('porProcedencia'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}

function allByTipoIncidencia()
{
    let rutaTickets = '../metricas/getByTipoIncidenciaAll';

    fetch(rutaTickets, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        let datosTickets = [];
        let labels = [];
        let bg = '#1D5EAD';

        for(dato of response.datos)
        {
            labels.push(dato.Tipo_Incidencia);
            datosTickets.push(dato.Tickets);
        }
        
        const data = {
            labels: labels,
            datasets: [{
                label: 'Tickets por Tipo de incidencia',
                backgroundColor: bg,
                borderColor: bg,
                data: datosTickets,
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    x: {
                        max: Math.max.apply(null, datosTickets)+3,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        max: Math.max.apply(null, datosTickets)+Math.ceil((Math.max.apply(null, datosTickets))*.2),
                        grid: {
                            display: false
                        } 
                    }
                },
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: '#000000',
                        anchor: 'end',
                        align: 'top',
                        offset: 10,
                        font: {
                            weight: 'bold',
                            size: 10,
                        }
                    }
                }                
            }
        };
        
        porTipoIncidencia = new Chart(
            document.getElementById('porTipoIncidencia'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}

function allByResolucion()
{
    let rutaTickets = '../metricas/getByResolucion';

    fetch(rutaTickets, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);

        let labels = ['Ticekts'];
        
        const data = {
            labels: labels,
            datasets: [{
                label: 'Resueltos',
                backgroundColor: '#C9E265',
                borderColor: '#C9E265',
                data: [response.datos[0].Tickets],
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },
            {
                label: 'Resueltos a destiempo',
                backgroundColor: '#FFE990',
                borderColor: '#FFE990',
                data: [response.datos[1].Tickets],
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },
            {
                label: 'Abiertos',
                backgroundColor: '#9B9B9B',
                borderColor: '#9B9B9B',
                data: [response.datos[2].Tickets],
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }
            ]
        };
        
        const config = {
            type: 'bar',
            data: data,
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false,
                            drawBorder: false,
                            lineWidth: 0.5
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            display: false,
                            drawBorder: false,
                            lineWidth: 0.5
                        } 
                    }
                },
                indexAxis: 'y',
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: '#000000',
                        anchor: 'center',
                        align: 'end',
                        offset: 20,
                        font: {
                            weight: 'bold',
                            size: 10,
                        }
                    }
                }                
            }
        };
        
        porResolucion = new Chart(
            document.getElementById('porResolucion'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}

allByEstado();
allByProcedencia();
allByResolucion()
allByTipoIncidencia();

document.getElementById("dropdown_filter_metricas").onclick = () =>
{
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_fecha_inicio = document.getElementById("fecha_inicio").value
    let f_fecha_fin = document.getElementById("fecha_fin").value

    const csrf = document.getElementById('_csrf').value;
    let ruta = '../tickets/filtros_backlog'

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin
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
            if(ticket.Id_Estado == 1){
                var style = ticket.Id_Estado == 1 ? "color: grey" :  ticket.Id_Estado  == 2 ? "color: yellow"  :  ticket.Id_Estado == 3 ? "color: green" : ticket.Id_Estado  == 4 ? "color: red" :  ticket.Id_Estado  == 5 ? "color: purple" : "color : black" 
                content.innerHTML += '<div  onClick="openTicket(this)" data-bs-toggle="modal" data-bs-target="#myModal" id=" boton' + ticket.Id_Ticket + '" class="col-3" style="cursor:pointer;margin-bottom:20px;"> <div class="card h-100" style="overflow: hidden;margin-top:10px;margin-bottom:10px;box-shadow: 1px 4px 8px rgba(0,0,0,0.46);"> <div class="card-body" style="text-align: left;width: 262px;overflow: hidden;"> <h4 class="card-title" style="overflow: hidden;color: rgb(0,0,0);text-align: left;"> #' + ticket.Id_Ticket + ':' + ticket.Asunto + '</h4> <h6 class="text-muted card-subtitle mb-2" style="overflow: hidden;color: rgb(0,0,0);">' + ticket.Descripcion.substring(0, 20) +'... </h6> <i class="fa fa-circle" style="'+ style +'" ></i> <span style="overflow: hidden;margin-left: 10px;color: rgb(136,136,136);">Creado el' + (ticket.Fecha_Inicio.toString()).substring(4, 21) + '</span> </div> </div> </div>'    
            }
        }

    }).catch(err => {
        console.log(err);
    });
}