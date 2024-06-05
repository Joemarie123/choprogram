import { defineStore } from "pinia";
import axios from "axios";

export const useUserAccount = defineStore("UserAccountStore", {
  state: () => ({
    UserAccountListahan: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async UserAccountList() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(`
      http://10.0.1.26:82/beneficiary/usersget.php`);
      this.UserAccountListahan = res.data.users;
      console.log("User Account List", res.data.users);
    },

    async UserAccount_Save_EDIT_DELETE(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/beneficiary/usersinsertupdate.php`,
        payload
      );
      console.log("User Account ADD =", res.data);
    },
  },
  persist: true,
});
