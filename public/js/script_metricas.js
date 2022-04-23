
function allByEstado()
{
    let rutaTickets = '../metricas/getByStatusAll';

    fetch(rutaTickets, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        }
    })
    .then(response => response.json())
    .then(response => {
        let datosTickets = [];
        let labels = [];

        for(dato of response.datos)
        {
            labels.push(dato[0]);
            datosTickets.push(dato[1]);
        }
        
        const data = {
            labels: labels,
            datasets: [{
              label: 'Tickets por estado',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: datosTickets,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {}
        };
        
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

    }).catch(err => {
        console.log(err);
    });
}