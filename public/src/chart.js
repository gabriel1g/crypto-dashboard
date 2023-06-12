const ctx = document.getElementById("chart").getContext("2d");

const gradientBTC = ctx.createLinearGradient(800, 0, 0, 0);
gradientBTC.addColorStop(1, 'transparent');
gradientBTC.addColorStop(0, '#ff08');

const gradientEHT = ctx.createLinearGradient(0, 450, 0, 0);
gradientEHT.addColorStop(0, 'transparent');
gradientEHT.addColorStop(1, '#f00a');

const gradientEUR = ctx.createLinearGradient(800, 0, 0, 0);
gradientEUR.addColorStop(0, 'transparent');
gradientEUR.addColorStop(1, '#86fa');


new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "BTC",
        data: [28000, 34000, 29900, 42000, 36000, 37000],
        borderWidth: "4",
        borderColor: "#f2a900",
        backgroundColor: gradientBTC,
        tension: 0.4,
        fill: true
      },
      {
        label: "ETH",
        data: [34000, 28000, 36000, 26000, 26000, 32900],
        borderColor: "#f006",
        borderWidth: "4",
        backgroundColor: gradientEHT,
        tension: 0.4,
        fill: true
      },
      {
        label: "EUR",
        data: [18500, 22000, 18600, 18900, 22000, 24000],
        borderColor: "#5819c2",
        borderWidth: "4",
        backgroundColor: gradientEUR,
        tension: 0.4,
        fill: true
      }
    ]
  },
  options: {
    responsive: true
  }
});
