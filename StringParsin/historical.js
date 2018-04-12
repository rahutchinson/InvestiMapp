/**
 * @file
 */
(function () {

  "use strict";
  function fetchStocks(symbol) {
    var microsoft = "MSFT"
    var google = "GOOG"
    const stocksDataHistorical = fetch("https://api.robinhood.com/quotes/historicals/?symbols=FB&interval=week");
    stocksDataHistorical
      .then(data => data.json())
      .then(data => {
        parseDay(data.results[0].historicals, "myChart")
      })
    .catch(err => console.log(err));
  };

  function parseDay(data, chartID){
    var history = []
    var days = []
    for (var i=0; i <data.length; i++) {
      history.push(data[i].close_price)
      days.push(i)
    }
    var ctx = document.getElementById(chartID).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: days,
          datasets: [{
            label: "FB",
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: history,
            fill: false
          }]
        },
        options: {
          responsive: false
        }
      });
    }

  $( document ).ready(function() {
      fetchStocks("")
  });
})();
