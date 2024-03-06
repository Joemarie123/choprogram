<template>
  <div>
    <canvas ref="horizontalBarChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    // Chart configuration
    const ctx = this.$refs.horizontalBarChart.getContext("2d");
    this.horizontalBarChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Horizontal Bar Chart",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: [10, 20, 30, 40, 50],
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
  beforeUnmount() {
    // Destroy the chart instance to prevent memory leaks
    if (this.horizontalBarChart) {
      this.horizontalBarChart.destroy();
    }
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
