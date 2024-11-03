// Start Shipments Chart

// Set The Label Items
let theLabel = [];
for (let i = 1; i < 11; i++) {
  theLabel.push(`${i} Jan`);
}

// Prepare data for the chart
const data = {
  labels: theLabel,
  datasets: [
    {
      type: 'bar',
      label: "Shipment",
      backgroundColor: 'rgb(255, 159, 67)',
      borderColor: 'rgb(255, 159, 67)',
      data: [18, 25, 13, 18, 12, 30, 28, 20, 22, 17],
      barThickness: 6,
      maxBarThickness: 8,
      borderRadius: 6,
  },
    {
      type: 'line',
      label: "Delivery",
      fill: false,
      backgroundColor: 'rgb(115, 103, 240)',
      borderColor: 'rgb(115, 103, 240)',
      data: [12, 8, 3, 12, 8, 24, 12, 18, 16, 6],
      // barThickness: 6,
      // maxBarThickness: 8,
      drawActiveElementsOnTop: true,
      // borderRadius: 6,
      tension: 0.1
  },
]
};
// Get the canvas element
const ctx = document.getElementById('shipment-chart').getContext('2d');

// Initialize the chart
const myChart = new Chart(ctx, {
  // type: 'bar',
  data: data,
  options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      responsive: false,
      plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                const label = tooltipItem.dataset.label || '';
                const value = tooltipItem.raw;
                return `${label}: ${value}%`
              }
            }
          },
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                font: {
                  size: 13,
                  family: 'Arial, sans-serif',
                },
                color: '#cfcde4',
                boxWidth: 20,
                padding: 20
              }
          },
          title: {
              display: false,
              text: 'Chart.js Bar Chart'
          }
      }
  },
});

// End Shipments Chart

// Start Reasons for delivery exceptions

// Prepare data for the chart
const reasonsData = {
  labels: [
    'Incorrect address',
    'Weather conditions',
    'Federal Holidays',
    'Damage during transit',
  ],
  datasets: [{
    label: '',
    data: [13, 25, 22, 40],
    backgroundColor: [
      'rgb(40, 199, 111)',
      'rgb(83, 210, 140)',
      'rgb(126, 221, 169)',
      'rgb(169, 233, 197)',
    ],
    hoverOffset: 4,
    borderWidth: 0,
  }]
};
// Get the canvas element
const reasonCtx = document.getElementById('reasons-chart').getContext('2d');

// Initialize the chart
const reasonChart = new Chart(reasonCtx, {
  type: 'doughnut',
  data: reasonsData,
  options: {
    responsive: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 11,
            family: 'Arial, sans-serif',
          },
          color: '#cfcde4',
          boxWidth: 10,
          padding: 20
        }
      },
    }
  },
});
// End Reasons for delivery exceptions
