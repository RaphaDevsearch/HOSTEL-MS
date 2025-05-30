const ctx = document.getElementById('needsRadarChart').getContext('2d');
const needsRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Food', 'Light', 'Water', 'WiFi', 'Cleanliness', 'Security', 'Comfort'],
        datasets: [{
            label: 'Client Satisfaction',
            data: [85, 75, 90, 80, 70, 95, 80], // Sample satisfaction scores (out of 100)
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            fill: true,
            tension: 0.4,
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    color: '#555'
                },
                grid: {
                    color: '#ddd'
                },
                pointLabels: {
                    font: {
                        size: 14
                    },
                    color: '#333'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#333',
                    font: { size: 14 }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }
});