import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("LoginStore", {
  state: () => ({
    user: [],
    // isAuthenticated: false,
  }),
  actions: {
    async userlogin(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/beneficiary/login.php`,
        payload
      );
      // console.log("data=",res.data);
      if (res.data["auth"] == "failed") return 0;
      if (res.data["auth"] == "none") return 2;
      //   this.controlno = res.data.controlno;
      return 1;
    },
  },
  persist: true,
});
