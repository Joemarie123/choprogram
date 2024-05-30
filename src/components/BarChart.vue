<template>
  <div id="chart">
    <apexcharts
      height="320"
      :options="chartOptions"
      :series="series"
      class="kinidaw"
    ></apexcharts>
  </div>
</template>

<script>
/* eslint-disable */

import VueApexCharts from "vue3-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },

  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          type: "bar",
          height: 350,
          foreColor: "#07a86d",
          title: {
            text: "Population Status",
            align: "center",
            style: {
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
              color: "#07a86d",
            },
          },
        },

        dataLabels: {
          enabled: false,
        },
        colors: ["#8DECB4", "#41B06E", "#036C24", "#4FE07E"],
        plotOptions: {
          dataLabels: {
            enabled: false,
          },

          bar: {
            horizontal: false,
            dataLabels: {},
            stroke: {
              width: 1,
              colors: ["#07a86d"],
            },
            legend: {
              position: "top",
              horizontalAlign: "left",
              offsetX: 40,
            },
          },

          showTotal: false,
        },

        xaxis: {
          categories: [2009, 2012, 2015, 2018, 2020, 2023],
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
      },

      series: [
        {
          name: "Elementary",
          data: [44, 55, 41, 37, 35, 38],
        },
        {
          name: "College",
          data: [53, 32, 33, 52, 45, 39],
        },
        {
          name: "High School",
          data: [12, 17, 11, 19, 18, 45],
        },
        {
          name: "Senior High",
          data: [19, 17, 15, 18, 16, 19],
        },
      ],
    };
  },
};
</script>
