
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
    let f_fecha_fin = document.getElementById("fecha_fin").value
    const csrf = document.getElementById('_csrf').value;
    let f_archivado = document.getElementById("filtro_archivado").value

    if(f_fecha_inicio == '')
    {
        f_fecha_inicio = "t.Fecha_Inicio";
    }

    if(f_fecha_fin == '')
    {
        f_fecha_fin = "t.Fecha_Inicio";
    }

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin,
        archivado: f_archivado
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
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_fecha_inicio = document.getElementById("fecha_inicio").value
    let f_fecha_fin = document.getElementById("fecha_fin").value
    const csrf = document.getElementById('_csrf').value;
    let f_archivado = document.getElementById("filtro_archivado").value

    if(f_fecha_inicio == '')
    {
        f_fecha_inicio = "t.Fecha_Inicio";
    }

    if(f_fecha_fin == '')
    {
        f_fecha_fin = "t.Fecha_Inicio";
    }

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin,
        archivado: f_archivado
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
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_fecha_inicio = document.getElementById("fecha_inicio").value
    let f_fecha_fin = document.getElementById("fecha_fin").value
    const csrf = document.getElementById('_csrf').value;
    let f_archivado = document.getElementById("filtro_archivado").value

    if(f_fecha_inicio == '')
    {
        f_fecha_inicio = "t.Fecha_Inicio";
    }

    if(f_fecha_fin == '')
    {
        f_fecha_fin = "t.Fecha_Inicio";
    }

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin,
        archivado: f_archivado
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
    let f_usuario = document.getElementById("filtro_usuario").value
    let f_categoria = document.getElementById("filtro_tipo_incidencia").value
    let f_fecha_inicio = document.getElementById("fecha_inicio").value
    let f_fecha_fin = document.getElementById("fecha_fin").value
    const csrf = document.getElementById('_csrf').value;
    let f_archivado = document.getElementById("filtro_archivado").value

    if(f_fecha_inicio == '')
    {
        f_fecha_inicio = "t.Fecha_Inicio";
    }

    if(f_fecha_fin == '')
    {
        f_fecha_fin = "t.Fecha_Inicio";
    }

    data = {
        tipo_incidencia : f_categoria,
        usuario: f_usuario,
        fecha_inicio: f_fecha_inicio,
        fecha_fin: f_fecha_fin,
        archivado: f_archivado
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
        console.log(response);

        let labels = ['Ticekts'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'Resueltos',
                backgroundColor: '#338128',
                borderColor: '#338128',
                data: [response.datos[0].Tickets],
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },
            {
                label: 'Resueltos a destiempo',
                backgroundColor: '#FFCD00',
                borderColor: '#FFCD00',
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
                            size: 15,
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
    porEstados.destroy();
    porTipoIncidencia.destroy();
    porProcedencia.destroy();
    porResolucion.destroy();

    allByEstado();
    allByProcedencia();
    allByResolucion()
    allByTipoIncidencia();
}

console.log(document.getElementById("fecha_inicio").value);

document.getElementById("fecha_inicio").onchange = () => {
    console.log(document.getElementById("fecha_inicio").value);
}