<template>
  <div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-9 q-mt-sm">
      <q-card class="my-card" bordered>
        <q-banner rounded class="q-my-sm">
          <div class="row justify-start">
            <div class="col-1">
              <q-btn
                unelevated
                size="md"
                icon="edit"
                class="blendingcolor"
                style="background-color: white"
                @click="CreationDialog = true"
              >
                <a style="color: white">CREATE</a>
              </q-btn>
            </div>
            <div class="col-2 q-mt-sm">
              <b
                ><p style="font-size: 20px; color: black">
                  LIST OF BENEFICIARIES
                </p></b
              >
            </div>

            <div class="col-2">
              <!--    <template v-slot:top-right> -->
              <q-input
                style="background-color: white"
                color="white"
                dense
                filled
                debounce="300"
                v-model="search_beneficiaries"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon color="blank" name="person_search" />
                </template>
              </q-input>
              <!--    </template> -->
            </div>
          </div>
        </q-banner>
        <div class="row">
          <q-dialog v-model="CreationDialog">
            <q-card>
              <q-card-section>
                <div class="text-h6">Personal Details</div>
              </q-card-section>

              <q-separator />

              <q-card-section class="scroll">
                <q-form>
                  <div class="row" style="margin-top: -15px">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        v-model="txtfname"
                        filled
                        label="First Name"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        filled
                        v-model="txtmname"
                        label="Middle Name"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person_outline" />
                        </template>
                      </q-input>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        v-model="txtlname"
                        label="Last Name"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="contact_page" />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Extension Name"
                        v-model="txtextensioname"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person_2" />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        class="q-pa-sm"
                        label="Date of Birth"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        type="date"
                        v-model="txtbirthday"
                      >
                        <template v-slot:prepend>
                          <q-icon name="event" />
                        </template>
                      </q-input>
                    </div>

                    <!--  <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-select
                        class="q-pa-sm"
                        label="Type of Beneficiaries"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        v-model="txtbeneficiariestype"
                      >
                        <template v-slot:prepend>
                          <q-icon name="switch_account" />
                        </template>
                      </q-select>
                    </div>
 -->
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <!--  <q-input filled label="Sex" dense class="q-pa-sm" /> -->
                      <q-select
                        class="q-pa-sm"
                        label="Barangay"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        option-value="value"
                        option-label="label"
                        emit-value
                        map-options
                        :options="barangayOptions"
                        v-model="selectedBarangay"
                      >
                        <template v-slot:prepend>
                          <q-icon name="location_city" />
                        </template>
                      </q-select>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <q-input
                        filled
                        label="Municipality"
                        v-model="txtmunicipality"
                        dense
                        readonly
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="business" />
                        </template>
                      </q-input>
                    </div>
                  </div>

                  <q-separator class="q-mb-sm"></q-separator>
                  <q-card-actions class="">
                    <q-btn
                      unelevated
                      size="md"
                      @click="saveBeneficiaries()"
                      class="full-width blendingcolor"
                      label="SAVE"
                      icon="save"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>

          <q-dialog v-model="edit_CreationDialog">
            <q-card>
              <q-card-section>
                <div class="text-h6">Edit Personal Details</div>
              </q-card-section>

              <q-separator />

              <q-card-section class="scroll">
                <q-form>
                  <div class="row" style="margin-top: -15px">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="First Name"
                        v-model="txtfname_edit"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Middle Name"
                        v-model="txtmname_edit"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person_outline" />
                        </template>
                      </q-input>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Last Name"
                        v-model="txtlname_edit"
                        dense
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="contact_page" />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Extension Name"
                        dense
                        v-model="txtextensionname_edit"
                        class="q-pa-sm"
                      >
                        <template v-slot:prepend>
                          <q-icon name="person_2" />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        class="q-pa-sm"
                        label="Date of Birth"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        type="date"
                        v-model="txtbirthday_edit"
                      >
                        <template v-slot:prepend>
                          <q-icon name="event" />
                        </template>
                      </q-input>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <!--  <q-input filled label="Sex" dense class="q-pa-sm" /> -->
                      <q-select
                        class="q-pa-sm"
                        label="Barangay"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        v-model="txtbarangay_edit"
                      >
                        <template v-slot:prepend>
                          <q-icon name="location_city" />
                        </template>
                      </q-select>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <!--  <q-input filled label="Sex" dense class="q-pa-sm" /> -->
                      <q-select
                        class="q-pa-sm"
                        label="Municipality/City"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        v-model="txtmunicipality_edit"
                      >
                        <template v-slot:prepend>
                          <q-icon name="business" />
                        </template>
                      </q-select>
                    </div>
                  </div>

                  <q-separator class="q-mb-sm"></q-separator>
                  <q-card-actions class="">
                    <q-btn
                      unelevated
                      size="md"
                      @click="Update_Beneficiaries()"
                      class="full-width blendingcolor"
                      label="Update"
                      icon="update"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

        <q-dialog v-model="DialogDelete" persistent>
          <q-card>
            <q-card-section class="row items-center q-pa-md">
              <q-icon name="warning" color="warning" />
              <span class="q-ml-sm">Are You Sure You Want to Delete</span>
            </q-card-section>

            <q-card-actions align="right">
              <!--     {{ txtID_Delete }} -->
              <q-btn
                flat
                label="Yes"
                color="primary"
                v-close-popup
                @click="Delete_Beneficiaries"
              />
              <q-btn
                flat
                label="No"
                color="negative"
                v-close-popup
                @click="handleCancel"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-card class="rounded-card q-mx-sm">
          <q-table
            class="my-sticky-dynamic"
            flat
            bordered
            dense
            :filter="search_beneficiaries"
            :rows="ListahanBeneficiaries"
            :columns="columns"
            :loading="loading"
            row-key="index"
            virtual-scroll
            :virtual-scroll-item-size="48"
            :virtual-scroll-sticky-size-start="48"
            :pagination="pagination"
            :rows-per-page-options="[0]"
            @virtual-scroll="onScroll"
          >
            <template v-slot:body-cell-actions="{ row }">
              <div class="actionsbtn">
                <q-btn
                  icon="edit"
                  flat
                  round
                  color="secondary"
                  @click="editItem(row)"
                >
                </q-btn>
                <q-btn
                  icon="delete"
                  flat
                  round
                  color="deep-orange"
                  @click="deleteItem(row)"
                >
                </q-btn>
              </div>
            </template>
          </q-table>
        </q-card>
      </q-card>
    </div>
  </div>
</template>

<script>
/* import HorizontalBarChart from "../components/HorizontalBarChart.vue"; */
/* import PieChart from "../components/PieChart.vue"; */
import { defineComponent } from "vue";

import { useQuasar } from "quasar";
import { useBeneficiaries } from "src/stores/Beneficiaries";
import { ref, computed, nextTick } from "vue";
export default defineComponent({
  name: "App",

  components: {
    /*   HorizontalBarChart, */
    /*   PieChart, */
  },
  data() {
    return {
      imageUrl: null,
      dialogpersonal: false,
      edit_CreationDialog: false,
      CreationDialog: false,
      txtlname: "",
      txtfname: "",
      search_beneficiaries: "",
      txtmname: "",
      txtextensioname: "",
      selectedBarangay: null,
      txtmunicipality: "",

      txtbirthday_edit: "",
      txtmunicipality_edit: "",
      txtbarangay_edit: "",
      txtextensionname_edit: "",
      txtfname_edit: "",
      txtmname_edit: "",
      txtlname_edit: "",
      txtID_Edit: "",
      txtID_Delete: "",

      model: ref(null),
      options_sex: ["Male", "Female"],
      columns: [
        {
          name: "Lastname",
          required: true,
          label: "Last Name",
          align: "left",
          field: (row) => row.Lastname,
          format: (val) => val,

          sortable: true,
        },
        {
          name: "Firstname",
          required: true,
          label: "First Name",
          align: "left",
          field: (row) => row.Firstname,
          format: (val) => val,
          sortable: true,
        },
        {
          name: "Middlename",
          required: true,
          label: "Middle Name",
          align: "left",
          field: (row) => row.Middlename,
          format: (val) => val,
          sortable: true,
        },

        {
          name: "Suffix",
          label: "Extension Name",
          field: "Suffix",
          sortable: true,
          align: "left",
        },

        {
          name: "Birthdate",
          align: "center",
          label: "Date of Birth",
          field: "Birthdate",
          sortable: true,
          align: "left",
        },
        {
          name: "Barangay",
          label: "Barangay",
          field: "Barangay",
          sortable: true,
          align: "left",
        },

        {
          name: "City",
          label: "Municipality/City",
          field: "City",
          sortable: true,
          align: "left",
        },
        {
          name: "actions",
          align: "left",
          label: "Action",
          field: "actions",
          sortable: true,
        },
      ],
      barangay_model: "",

      txtbirthday: "",
      DialogDelete: false,

      ListahanBeneficiaries: [],
      ListahanBarangay: [],
      barangaylist: [],
      ListahanTypeofBeneficiaries: [],
      barangaylista: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },

  computed: {
    barangayOptions() {
      return this.ListahanBarangay.map((item) => ({
        value: item.barangay,
        label: item.barangay,
      }));
    },
  },

  watch: {
    selectedBarangay(newBarangay) {
      const selected = this.ListahanBarangay.find(
        (item) => item.barangay == newBarangay
      );
      this.txtmunicipality = selected ? selected.city : "";
    },
  },

  created() {
    const store = useBeneficiaries();
    store.Beneficiaries_List().then((res) => {
      this.ListahanBeneficiaries = store.ListBeneficiaries;
      console.log("Beneficiaries List=", this.ListahanBeneficiaries);
    });

    const store1 = useBeneficiaries();
    store1.Beneficiaries_Barangay().then((res) => {
      this.ListahanBarangay = store1.ListBeneficiaries_Barangay;
      console.log("Barangay List=", this.ListahanBarangay);
    });

    const store2 = useBeneficiaries();
    store2.TypeBeneficiariesList().then((res) => {
      this.ListahanTypeofBeneficiaries = store2.TypeBeneficiaries;
      console.log("Type Benefeciaries List=", this.ListahanBarangay);
    });
  },

  mounted() {
    this.fetchbarangay();
  },

  setup() {
    const $q = useQuasar();
    return {
      showsuccessfullsave() {
        $q.notify({
          icon: "star_half",
          color: "green",
          message: "SUCCESSFULLY SAVED",
          position: "center",
          timeout: "2000",
        });
      },

      showsuccessfullUpdated() {
        $q.notify({
          icon: "star_half",
          color: "green",
          message: "SUCCESSFULLY UPDATED",
          position: "center",
          timeout: "2000",
        });
      },

      showsuccessfullyDeleted() {
        $q.notify({
          icon: "star_half",
          color: "red",
          message: "SUCCESSFULLY DELETED",
          position: "center",
          timeout: "2000",
        });
      },
    };
  },

  methods: {
    async deleteItem(row) {
      console.log("ROW DELETE", row.ID);
      this.txtID_Delete = row.ID;
      this.DialogDelete = true;
    },

    async saveBeneficiaries() {
      const store = useBeneficiaries();
      let data = new FormData();
      data.append("lastname", this.txtlname);
      data.append("firstname", this.txtfname);
      data.append("middlename", this.txtmname);
      data.append("suffix", this.txtextensioname);
      data.append("birthdate", this.txtbirthday);
      data.append("barangay", this.selectedBarangay);
      data.append("city", this.txtmunicipality);

      store.Beneficiaries_Save_EDIT_DELETE(data).then((res) => {
        this.showsuccessfullsave();
        const store = useBeneficiaries();
        store.Beneficiaries_List().then((res) => {
          this.ListahanBeneficiaries = store.ListBeneficiaries;
          console.log("Beneficiaries List=", this.ListahanBeneficiaries);
        });

        this.txtlname = "";
        this.txtfname = "";
        this.txtmname = "";
        this.txtextensioname = "";
        this.txtbirthday = "";
        this.selectedBarangay = "";
        this.txtmunicipality = "";

        // this.CreationDialog = false;
      });
    },

    async Delete_Beneficiaries() {
      const store = useBeneficiaries();
      let data = new FormData();
      data.append("id", this.txtID_Delete);
      data.append("type", "delete");

      store.Beneficiaries_Save_EDIT_DELETE(data).then((res) => {
        this.showsuccessfullyDeleted();
        const store = useBeneficiaries();
        store.Beneficiaries_List().then((res) => {
          this.ListahanBeneficiaries = store.ListBeneficiaries;
          console.log("Beneficiaries List=", this.ListahanBeneficiaries);
        });

        // this.CreationDialog = false;
      });
    },

    async Update_Beneficiaries() {
      const store = useBeneficiaries();
      let data = new FormData();
      data.append("id", this.txtID_Edit);
      data.append("lastname", this.txtlname_edit);
      data.append("firstname", this.txtfname_edit);
      data.append("middlename", this.txtmname_edit);
      data.append("suffix", this.txtextensionname_edit);
      data.append("birthdate", this.txtbirthday_edit);
      data.append("barangay", this.txtbarangay_edit);
      data.append("city", this.txtmunicipality_edit);
      data.append("type", "edit");

      store.Beneficiaries_Save_EDIT_DELETE(data).then((res) => {
        this.showsuccessfullUpdated();
        const store = useBeneficiaries();
        store.Beneficiaries_List().then((res) => {
          this.ListahanBeneficiaries = store.ListBeneficiaries;
          console.log("Beneficiaries List=", this.ListahanBeneficiaries);
        });

        // this.CreationDialog = false;
      });
    },

    async fetchbarangay() {
      try {
        // Simulate fetching data
        if (Array.isArray(this.ListahanBarangay)) {
          console.log("array------------", this.ListahanBarangay);
          this.BarangayData = this.ListahanBarangay.map((user) => {
            return {
              barangay: user.barangay,
              // id: user.id,
            };
          });

          this.barangaylist = this.BarangayData.map(
            (BarangayData) => BarangayData.barangay
          ).sort();
          console.log("Barangay LISSSTTT=", this.barangaylist);
        } else {
          console.error("Invalid data format:", this.ListahanBarangay);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    editItem(row) {
      console.log("DATA", row);
      this.edit_CreationDialog = true;

      this.txtID_Edit = row.ID;
      this.txtfname_edit = row.Firstname;
      this.txtmname_edit = row.Middlename;
      this.txtlname_edit = row.Lastname;
      this.txtextensionname_edit = row.Suffix;
      this.txtbirthday_edit = row.Birthdate;
      this.txtbarangay_edit = row.Barangay;
      this.txtmunicipality_edit = row.Province;
    },

    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Reset imageUrl before updating with the new image
        this.imageUrl = null;

        this.imageUrl = URL.createObjectURL(file);
        this.$emit("image-selected", this.imageUrl);
        // You can emit this imageUrl to the parent component if needed
      }
    },
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
      /*  this.dialogpersonal = true; */
    },
  },
});
</script>

<style scoped>
.rounded-card {
  border-radius: 20px; /* Adjust the radius as per your preference */
}
.blendingcolor {
  background: linear-gradient(40deg, #279f27, #5fc331);
  color: white;
}

.placeholder {
  border: 2px dashed #ccc;
  padding-top: 80px;
  text-align: center;
  color: #777;
  width: 200px;
  height: 195px;
}
.imunizationbackgroundcolor {
  background-color: black;
  color: white;
}
.imunizationbackgroundcolor_caption {
  background-color: #057407;
  color: white;
  margin-top: -13%;
}

.rowup {
  margin-top: -4%;
}

.rowup1 {
  margin-top: -3%;
}
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
