import { defineStore } from "pinia";
import axios from "axios";

export const useLibraries = defineStore("LibrariesStore", {
  state: () => ({
    TypeBeneficiaries: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async TypeBeneficiariesList() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/beneficiarytypeget.php`);
      this.TypeBeneficiaries = res.data.beneficiaries;
      console.log("TYpe of Beneficiaries", res.data.beneficiaries);
    },

    async Beneficiary_Type_Save_EDIT_DELETE(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/beneficiary/beneficiarytypepost.php`,
        payload
      );
      console.log("Type LIbraries =", res.data);
    },
  },
  persist: true,
});
