const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Resumen'
        }
      }
    },
  };

  const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = Utils.months({count: 12});
const data = {
  labels: labels,
  datasets: [
    {
      
    },
    {
      label: 'IVA',
      data: [35, 54, 67, 12, 36, 85, 100, 20, 43, 90, 23, 87],
      backgroundColor: 'rgba(97,97, 97, 0.5)',
      borderWidth: 0,
      borderRadius: 10,
      borderSkipped: false,
    }
  ]
};

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
        });
        chart.update();
      }
    },
  ];