import { defineStore } from "pinia";
import axios from "axios";

export const useBeneficiaries = defineStore("BeneficiariesStore", {
  state: () => ({
    ListBeneficiaries: [],
    ListBeneficiaries_Barangay: [],
    TypeBeneficiaries: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async Beneficiaries_Save_EDIT_DELETE(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/beneficiary/insertupdate.php`,
        payload
      );
      console.log("ADD BENEFICIRIES =", res.data);
    },

    async TypeBeneficiariesList() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/beneficiarytypeget.php`);
      this.TypeBeneficiaries = res.data.beneficiaries;
      console.log("TYpe of Beneficiaries", res.data.beneficiaries);
    },

    async Beneficiaries_List() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/beneficiaries.php`);
      this.ListBeneficiaries = res.data.beneficiaries;
      console.log("List", res.data.beneficiaries);
    },

    async Beneficiaries_Barangay() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/barangayget.php`);
      this.ListBeneficiaries_Barangay = res.data.beneficiaries;
      console.log("List Binificiaries Barangay", res.data.beneficiaries);
    },
  },
  persist: true,
});
