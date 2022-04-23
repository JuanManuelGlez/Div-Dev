
function allByEstado()
{
    let rutaTickets = '../metricas/getByStatusAll';

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
              data: datosTickets,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',                    
            }
        };
        
        const porEstados = new Chart(
            document.getElementById('porEstados'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}

allByEstado();