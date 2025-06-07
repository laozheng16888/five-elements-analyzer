function drawChart(data) {
  const ctx = document.getElementById("fiveElementChart").getContext("2d");

  // 清除旧图表（避免重复绘制）
  if (window.fiveElementChart) {
    window.fiveElementChart.destroy();
  }

  window.fiveElementChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: [
            "#66bb6a", // Wood
            "#ef5350", // Fire
            "#ffa726", // Earth
            "#42a5f5", // Metal
            "#26c6da"  // Water
          ]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value.toFixed(1)} points`;
            }
          }
        }
      }
    }
  });
}
