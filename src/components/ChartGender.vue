<template>
  <div class="example">
    <apexchart
      :width="width"
      height="280"
      :options="options"
      :series="data"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  props: {
    title: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    loading: {
      type: Boolean,
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      data: [2000, 3000],
    };
  },
  computed: {
    options() {
      return {
        chart: {
          type: "pie",
        },

        dataLabels: {
          enabled: true,

          formatter: function (value, opts) {
            const display_value_percentage =
              opts.w.globals.labels[opts.seriesIndex];
            const displaydata = opts.w.config.series[opts.seriesIndex];
            return [
              display_value_percentage,
              value.toFixed(1) + "%",
              displaydata,
            ];
          },

          style: {
            fontSize: "20px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
          },
        },

        plotOptions: {
          pie: {
            dataLabels: {
              /*     Percentage move to center */
              offset: -40,
            },
          },
        },
        colors: ["#8DECB4", "#41B06E", "#05EAC1", "#E08A04"],

        legend: {
          show: false,
          position: "bottom",
        },

        labels: ["Male", "Female"],
      };
    },
  },
};
</script>
