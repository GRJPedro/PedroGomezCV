const polar = document.getElementById('polar')
const names = ['lectura', 'escrita', 'oral']
const porcentaje = [90, 70, 60]


const miPola = new Chart(polar, {
  type: 'polarArea',
  data: {
    labels: names,
    datasets: [{
      label: 'Inglés',
      data: porcentaje,
      backgroundColor: [
      'rgba(93, 128, 85, 0.7)',
      'rgba(119, 137, 115, 0.7)',
      'rgba(210, 210, 210, 0.7)'
      ],
      borderWidth:[0.5,0.5,0.5
      ],
      borderColor:[
      'rgb(93, 128, 85)',
      'rgb(119, 137, 115)',
      'rgb(210, 210, 210)'
      ]
    }]
  },
  options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(0, 0, 0)',
          fontFamily: 'Times'
        }
    },
    scales: {
      r: {
        ticks: {
          labels: {
          }
        }
      }
    }
  }
})