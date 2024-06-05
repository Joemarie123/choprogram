import { defineStore } from "pinia";
import axios from "axios";

export const useDashboard = defineStore("DashboardStore", {
  state: () => ({
    Count_Total_Beneficiaries: [],
    Count_Total_Unreleased: [],
    Count_Total_Released: [],
    Total_Member_with_Beneficiaries: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async DashBoard_List() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/dashboard.php`);
      this.Count_Total_Beneficiaries = res.data.total;
      this.Count_Total_Unreleased = res.data.unreleased;
      this.Count_Total_Released = res.data.released;
       this.Total_Member_with_Beneficiaries = res.data.members;
      console.log("Total Beneficiaries", res.data.total);
      console.log("Total Unreleased", res.data.unreleased);
      console.log("Total Released", res.data.released);
      console.log("Total Member With Beneficiaries", res.data.members);
    },
  },
  persist: true,
});
