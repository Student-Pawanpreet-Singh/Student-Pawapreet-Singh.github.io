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
        data: {
            labels: ['T1H', 'T1J', 'T1K', 'T1L', 'T1M', 'T1N'],
            datasets: [{
                backgroundColor: backgroundColours,
                label: '# Aantal studenten per klas',
                data: [20, 18, 21, 18, 17, 19],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}