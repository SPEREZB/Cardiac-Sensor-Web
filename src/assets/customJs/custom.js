window.onload = function() {
let app = angular.module('miModulo'); 
let ctx = document.getElementById('pulse-chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Pulse',
            data: [],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

fetch('http://localhost:8080/frecuenciacardiaca/getData')
    .then(res => res.json())
    .then(data => {
        data.forEach(d => {
            chart.data.labels.push(d.bpm);
            chart.data.datasets[0].data.push(d.duration);
        });
        chart.update();
    });

    fetch('http://localhost:8080/frecuenciacardiaca/getResul')
    .then(res => res.json())
    .then(data => {
        data.forEach(d => {
            chart.data.labels.push(d.bpm);
            chart.data.datasets[0].data.push(d.duration);
        });
        chart.update();
    });

}