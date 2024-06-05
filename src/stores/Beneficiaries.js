import { defineStore } from "pinia";
import axios from "axios";

export const useBeneficiaries = defineStore("BeneficiariesStore", {
  state: () => ({
    ListBeneficiaries: [],
    ListBeneficiaries_Barangay: [],
    Memberinfo: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async Release_Beneficiary(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `
      http://10.0.1.26:82/beneficiary/release.php`,
        payload
      );
      //  this.Memberinfo = res.data.info;
      console.log("Release Beneficiary", res.data);
    },

    async ViewDetails_MemberInfo(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `
      http://10.0.1.26:82/beneficiary/memberinfo.php`,
        payload
      );
      this.Memberinfo = res.data.info;
      console.log("ViewDetails MemberInfo", res.data.info);
    },

    async Beneficiaries_Save_EDIT_DELETE(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/beneficiary/insertupdate.php`,
        payload
      );
      console.log("ADD BENEFICIRIES =", res.data);
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
