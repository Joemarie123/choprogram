<template>
  <div>
    <div class="row dashboard">
      <div class="col-12 col-sm-6 col-md-3 col-lg-3">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-item>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  style="background-color: #057407"
                  text-color="white"
                  icon="groups"
                >
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label><b>Sample Count 1</b></q-item-label>
                <p>
                  <b style="font-size: 20px; color: #057407">1,500</b>
                </p>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3 col-lg-3">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-item>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  style="background-color: #057407"
                  text-color="white"
                  icon="precision_manufacturing"
                >
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><b>Sample Count 2</b></q-item-label>
                <p>
                  <b style="font-size: 20px; color: #057407">1,500</b>
                </p>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3 col-lg-3">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-item>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  style="background-color: #057407"
                  text-color="white"
                  icon="precision_manufacturing"
                >
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><b>Sample Count 3</b></q-item-label>
                <p>
                  <b style="font-size: 20px; color: #057407">1,500</b>
                </p>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>

      <q-dialog v-model="dialogpersonal" persistent>
        <q-card style="width: 50%; height: 50%">
          <q-card-section>
            <div class="text-h6">Personal Details</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input
                    filled
                    label="ID Number"
                    dense
                    class="q-pa-sm"
                    type="number"
                  />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Lastname" dense class="q-pa-sm" />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Firstname" dense class="q-pa-sm" />
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Middlename" dense class="q-pa-sm" />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Designation" dense class="q-pa-sm" />
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Office" dense class="q-pa-sm" />
                </div>
              </div>
              <q-separator class="q-mb-sm"></q-separator>
              <div class="text-title">Login Credentials</div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Username" dense class="q-pa-sm" />
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <q-input filled label="Password" dense class="q-pa-sm" />
                </div>
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Cancel"
              color="primary"
              v-close-popup
              size="md"
            />
            <q-btn
              label="Save"
              color="secondary"
              size="md"
              v-close-popup
              @click="save"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div class="col-12 col-sm-6 col-md-3 col-lg-3">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-item>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  style="background-color: #057407"
                  text-color="white"
                  icon="precision_manufacturing"
                >
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><b>Sample Count 4</b></q-item-label>
                <p>
                  <b style="font-size: 20px; color: #057407">1,500</b>
                </p>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
/* import HorizontalBarChart from "../components/HorizontalBarChart.vue"; */
/* import PieChart from "../components/PieChart.vue"; */
import { defineComponent } from "vue";
import { ref, computed, nextTick } from "vue";
export default defineComponent({
  name: "App",

  components: {
    /*   HorizontalBarChart, */
    /*   PieChart, */
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
.dashboard {
  padding: 2%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.my-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin: 1%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
