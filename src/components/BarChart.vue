v
<template>
  <div>
    <apexchart
      type="bar"
      height="320"
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useDashboard } from "../stores/Dashboard";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      members: [],
      chartSeries: [
        {
          name: "Members",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 380,
        },
        plotOptions: {
          bar: {
            distributed: false,
            columnWidth: "15%",
            dataLabels: {
              position: "top",
              enabled: true,
              formatter: (val, opts) => {
                const type =
                  this.chartOptions.xaxis.categories[opts.dataPointIndex];
                return `${val} (${type})`; // Include the member count and type
              },
              style: {
                colors: ["#057407"], // Set color directly in style
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "diagonal1",
            gradientToColors: ["#5fc331"],
            stops: [0, 100],
          },
        },
        colors: ["#279f27"],
        title: {
          text: "Member Count",
        },
        xaxis: {
          categories: [], // This will be filled dynamically
          labels: {
            style: {
              colors: [], // Optional: set specific colors for labels
              fontSize: "12px",
            },
          },
        },
      },
    };
  },
  created() {
    const store2 = useDashboard();
    store2.DashBoard_List().then((res) => {
      this.members = store2.Total_Member_with_Beneficiaries;
      console.log("DashBoard Member", this.members);
      this.updateChartData();
    });
  },
  methods: {
    updateChartData() {
      // Extract member counts and types from the array
      const memberCounts = this.members.map((member) => member.members);
      const memberTypes = this.members.map((member) => member.type);
      // let memberTypes=[];
      //  this.members.forEach((member)=>{
      //   memberTypes.push([member.type])
      // })

      console.log("Member Counts:", memberCounts);
      console.log("Member Types:", Object.values(memberTypes));

      // Update chart series and categories
      this.chartSeries[0].data = memberCounts;
      // this.chartOptions.xaxis.categories = Object.values(memberTypes);
      this.members.forEach((member) => {
        this.chartOptions.xaxis.categories.push(member.type);
      });

      console.log("memberType Category:", memberTypes);

      console.log(
        "Categories after update:",
        JSON.stringify(this.chartOptions.xaxis.categories, (key, value) => {
          if (typeof value == "string") {
            return value;
          }
          return value;
        })
      );
    },
  },
});
</script>

<style scoped>
.chart-label {
  color: black; /* Set color to black */
}

/* Add other CSS styles as needed */
</style>
