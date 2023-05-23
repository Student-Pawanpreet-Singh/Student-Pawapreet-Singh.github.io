// BACK TO TOP BUTTON
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Chart Js
console.log('Main loaded');

const backgroundColours = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
const chartExample = document.querySelector('.chart-skill-1');

createChart(chartExample);

function createChart(canvasElement) {
    new Chart(canvasElement, {
        type: 'bar',
        axis: 'y',
        data: {
            labels: ['JavaScript', 'HTML', 'CSS', 'Bootstrap 5', 'PHP', 'SQL'],
            datasets: [{
              backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 205, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(201, 203, 207, 0.4)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
                label: 'Skill Sets',
                data: [7, 10, 9, 10, 6, 5, 1],
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
        }
    });
}
// -------------------