<template>
  <div>
    <div class="row dashboard">
      <div class="col-12 col-lg-3 col-md-3 col-sm-6">
        <div class="col-12">
          <q-card class="rounded-card q-mx-md q-pa-sm">
            <div class="row">
              <div class="col-6">
                <q-card-section horizontal class="justify-start">
                  <q-item>
                    <!--   <q-item-section avatar> -->
                    <q-avatar
                      rounded
                      class="stylefordashboardicon"
                      text-color="white"
                      icon="how_to_reg"
                    >
                    </q-avatar>
                    <!--   </q-item-section> -->
                  </q-item>
                </q-card-section>
              </div>

              <div class="col-6">
                <q-card-section horizontal class="justify-end">
                  <q-item>
                    <img
                      src="../assets/imgs/graph.png"
                      alt="Tagum City"
                      style="height: 100%; width: 85%"
                    />
                  </q-item>
                </q-card-section>
              </div>
            </div>

            <div class="row" style="margin-top: -25px">
              <div class="col-12 q-pa-sm q-mt-lg">
                <p>Total Beneficiaries</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-sm">
                <p style="font-size: 20px; margin-top: -30px">
                  <b>1,45454</b>
                </p>
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-lg-3 col-md-3 col-sm-6">
        <div class="col-12">
          <q-card class="rounded-card q-mx-md q-pa-sm">
            <div class="row">
              <div class="col-6">
                <q-card-section horizontal class="justify-start">
                  <q-item>
                    <!--   <q-item-section avatar> -->
                    <q-avatar
                      rounded
                      class="stylefordashboardicon"
                      text-color="white"
                      icon="group"
                    >
                    </q-avatar>
                    <!--   </q-item-section> -->
                  </q-item>
                </q-card-section>
              </div>

              <div class="col-6">
                <q-card-section horizontal class="justify-end">
                  <q-item>
                    <img
                      src="../assets/imgs/graph.png"
                      alt="Tagum City"
                      style="height: 100%; width: 85%"
                    />
                  </q-item>
                </q-card-section>
              </div>
            </div>

            <div class="row" style="margin-top: -25px">
              <div class="col-12 q-pa-sm q-mt-lg">
                <p>Total Population</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-sm">
                <p style="font-size: 20px; margin-top: -30px">
                  <b>1,45454</b>
                </p>
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-lg-3 col-md-3 col-sm-6">
        <div class="col-12">
          <q-card class="rounded-card q-mx-md q-pa-sm">
            <div class="row">
              <div class="col-6">
                <q-card-section horizontal class="justify-start">
                  <q-item>
                    <!--   <q-item-section avatar> -->
                    <q-avatar
                      rounded
                      class="stylefordashboardicon"
                      text-color="white"
                      icon="pending_actions"
                    >
                    </q-avatar>
                    <!--   </q-item-section> -->
                  </q-item>
                </q-card-section>
              </div>

              <div class="col-6">
                <q-card-section horizontal class="justify-end">
                  <q-item>
                    <img
                      src="../assets/imgs/graph.png"
                      alt="Tagum City"
                      style="height: 100%; width: 85%"
                    />
                  </q-item>
                </q-card-section>
              </div>
            </div>

            <div class="row" style="margin-top: -25px">
              <div class="col-12 q-pa-sm q-mt-lg">
                <p>Non Registered Voters</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-sm">
                <p style="font-size: 20px; margin-top: -30px">
                  <b>1,45454</b>
                </p>
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-lg-3 col-md-3 col-sm-6">
        <div class="col-12">
          <q-card class="rounded-card q-mx-md q-pa-sm">
            <div class="row">
              <div class="col-6">
                <q-card-section horizontal class="justify-start">
                  <q-item>
                    <!--   <q-item-section avatar> -->
                    <q-avatar
                      rounded
                      class="stylefordashboardicon"
                      text-color="white"
                      icon="house"
                    >
                    </q-avatar>
                    <!--   </q-item-section> -->
                  </q-item>
                </q-card-section>
              </div>

              <div class="col-6">
                <q-card-section horizontal class="justify-end">
                  <q-item>
                    <img
                      src="../assets/imgs/graph.png"
                      alt="Tagum City"
                      style="height: 100%; width: 85%"
                    />
                  </q-item>
                </q-card-section>
              </div>
            </div>

            <div class="row" style="margin-top: -25px">
              <div class="col-12 q-pa-sm q-mt-lg">
                <p>Purok</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 q-pa-sm">
                <p style="font-size: 20px; margin-top: -30px">
                  <b>1,45454</b>
                </p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row dashboard2" style="margin-top: -40px">
      <div class="col-3">
        <q-card class="rounded-card q-mx-md q-pa-sm">
          <ChartGender />
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="rounded-card q-mx-md q-pa-sm">
          <p style="font-size: 12px; color: #057407" class="text-center">
            Population Status
          </p>
          <BarChart />
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="rounded-card q-mx-md q-pa-sm">
          <div class="row q-mx-md">
            <div class="col-6 q-mt-sm">
              <div class="row">
                <p style="font-size: 15px">Settled Cases</p>
              </div>
              <div class="row">
                <p style="font-size: 15px; margin-top: -12px">
                  <b>4,000</b>
                </p>
              </div>
            </div>

            <div class="col-6">
              <q-card-section horizontal class="justify-end">
                <q-item>
                  <!--   <q-item-section avatar> -->
                  <q-avatar
                    rounded
                    class="stylefordashboardicon"
                    text-color="white"
                    icon="group"
                  >
                  </q-avatar>
                  <!--   </q-item-section> -->
                </q-item>
              </q-card-section>
            </div>
          </div>
        </q-card>

        <q-card class="rounded-card q-mx-md q-pa-sm q-mt-sm">
          <div class="row q-mx-md">
            <div class="col-6 q-mt-sm">
              <div class="row">
                <p style="font-size: 15px">Unschedule Cases</p>
              </div>
              <div class="row">
                <p style="font-size: 15px; margin-top: -12px"><b>4,000</b></p>
              </div>
            </div>

            <div class="col-6">
              <q-card-section horizontal class="justify-end">
                <q-item>
                  <!--   <q-item-section avatar> -->
                  <q-avatar
                    rounded
                    class="stylefordashboardicon"
                    text-color="white"
                    icon="perm_contact_calendar"
                  >
                  </q-avatar>
                  <!--   </q-item-section> -->
                </q-item>
              </q-card-section>
            </div>
          </div>
        </q-card>

        <q-card class="rounded-card q-mx-md q-pa-sm q-mt-sm">
          <div class="row q-mx-md">
            <div class="col-6 q-mt-sm">
              <div class="row">
                <p style="font-size: 15px">Unschedule Cases</p>
              </div>
              <div class="row">
                <p style="font-size: 15px; margin-top: -12px"><b>4,000</b></p>
              </div>
            </div>

            <div class="col-6">
              <q-card-section horizontal class="justify-end">
                <q-item>
                  <!--   <q-item-section avatar> -->
                  <q-avatar
                    rounded
                    class="stylefordashboardicon"
                    text-color="white"
                    icon="perm_contact_calendar"
                  >
                  </q-avatar>
                  <!--   </q-item-section> -->
                </q-item>
              </q-card-section>
            </div>
          </div>
        </q-card>
        <q-card class="rounded-card q-mx-md q-pa-sm q-mt-sm">
          <div class="row q-mx-md">
            <div class="col-6 q-mt-sm">
              <div class="row">
                <p style="font-size: 15px">Schedule Cases</p>
              </div>
              <div class="row">
                <p style="font-size: 15px; margin-top: -12px"><b>4,000</b></p>
              </div>
            </div>

            <div class="col-6">
              <q-card-section horizontal class="justify-end">
                <q-item>
                  <!--   <q-item-section avatar> -->
                  <q-avatar
                    rounded
                    class="stylefordashboardicon"
                    text-color="white"
                    icon="event_available"
                  >
                  </q-avatar>
                  <!--   </q-item-section> -->
                </q-item>
              </q-card-section>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
/* import HorizontalBarChart from "../components/HorizontalBarChart.vue"; */
/* import PieChart from "../components/PieChart.vue"; */
import { defineComponent } from "vue";
import ChartGender from "components/ChartGender.vue";
import BarChart from "components/BarChart.vue";
import { ref, computed, nextTick } from "vue";
export default defineComponent({
  name: "App",

  components: {
    /*   HorizontalBarChart, */
    /*   PieChart, */
    ChartGender,
    BarChart,
  },
  data() {
    return {
      dialogpersonal: false,
      filter: "",
      columns: [
        {
          name: "fullname",
          required: true,
          label: "Full Name",
          align: "left",
          field: (row) => row.fullname,
          format: (val) => val,
          sortable: true,
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true,
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: "actions",
          label: "Actions",
          field: "Actions",
          sortable: true,
          align: "center",
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],

      seed: [
        {
          fullname: "Joemarie Rendon",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%",
        },
        {
          fullname: "Jograd Mahusay",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          fullname: "Pablo Escobar",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%",
        },
        {
          fullname: "Stepehn Curry",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%",
        },
        {
          fullname: "Honey Marjie Curay",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%",
        },
        {
          fullname: "Carlo QUEZON",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%",
        },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {
    ChartDatas() {
      const activecount = this.ActiveCount;
      const inactive = this.personnelsCount - activecount;
      const chartData = {
        labels: ["Active", "End of Contract"],
        datasets: [
          {
            data: [activecount, inactive],
            backgroundColor: ["#77DD76", "#FFB6B3"],
          },
        ],
      };
      return chartData;
    },

    Rowclick() {
      this.dialogpersonal = true;
    },
  },
});
</script>

<style scoped>
.stylefordashboardicon {
  background: linear-gradient(
    40deg,
    #279f27,
    #5fc331
  ); /* Gradient from green to white */
}

.rounded-card {
  border-radius: 20px; /* Adjust the radius as per your preference */
}

.dashboard {
  padding: 2%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.dashboard2 {
  padding: 2%;

  display: flex;
  flex-wrap: wrap;
  padding-top: 50x;
}

.my-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin: 1%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
