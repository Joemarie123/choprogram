<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <img
            width="50"
            height="50"
            src="../assets/imgs/logo.png"
            alt="engineering"
          />
          <span class="q-ml-xs" style="font-size: 15px"
            >TAGUM CITY BENEFICIARY</span
          >
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat @click="routetologin()">
            <q-avatar size="40px">
              <img src="../assets/imgs/logout.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item-section class="responsive-text q-mx-xl q-my-lg">
            <q-item-label> <b>DASHBOARD VIEW</b> </q-item-label>
          </q-item-section>

          <q-item
            clickable
            v-ripple
            @click="handleItemClick"
            :class="{ 'active-item': selectedSection === 'dashboard' }"
          >
            <q-item-section avatar>
              <q-avatar
                rounded
                :class="{
                  blendingcolor: selectedSection === 'dashboard',
                  'default-color': selectedSection !== 'dashboard',
                }"
                text-color="white"
                icon="dashboard"
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="responsive-text">
              <q-item-label> <b>DashBoard</b> </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="handleItemClick_Beneficiary"
            :class="{ 'active-item': selectedSection === 'beneficiary' }"
          >
            <q-item-section avatar>
              <q-avatar
                rounded
                :class="{
                  blendingcolor: selectedSection === 'beneficiary',
                  'default-color': selectedSection !== 'beneficiary',
                }"
                text-color="white"
                icon="group"
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="responsive-text">
              <q-item-label> <b>Beneficiary</b> </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="handleItemClick_libraries"
            :class="{ 'active-item': selectedSection === 'libraries' }"
          >
            <q-item-section avatar>
              <q-avatar
                rounded
                :class="{
                  blendingcolor: selectedSection === 'libraries',
                  'default-color': selectedSection !== 'libraries',
                }"
                text-color="white"
                icon="library_books"
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="responsive-text">
              <q-item-label> <b>Libraries</b> </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="handleItemClick_useraccount"
            :class="{ 'active-item': selectedSection === 'useraccount' }"
          >
            <q-item-section avatar>
              <q-avatar
                rounded
                :class="{
                  blendingcolor: selectedSection === 'useraccount',
                  'default-color': selectedSection !== 'useraccount',
                }"
                text-color="white"
                icon="manage_accounts"
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="responsive-text">
              <q-item-label> <b>User Account</b> </q-item-label>
            </q-item-section>
          </q-item>
          <!--
          <q-item
            clickable
            v-ripple
            @click="handleItemClick_TODOS"
            :class="{ 'active-item': selectedSection === 'ToDoos_Two' }"
          >
            <q-item-section avatar>
              <q-avatar
                rounded
                :class="{
                  blendingcolor: selectedSection === 'ToDoos_Two',
                  'default-color': selectedSection !== 'ToDoos_Two',
                }"
                text-color="white"
                icon="manage_accounts"
              >
              </q-avatar>
            </q-item-section>

            <q-item-section class="responsive-text">
              <q-item-label> <b>TO DOS</b> </q-item-label>
            </q-item-section>
          </q-item> -->

          <!--     <q-expansion-item group="somegroup" v-model="settings">
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  :class="{
                    blendingcolor: settings,
                    'default-color': !settings,
                  }"
                  text-color="white"
                  icon="settings"
                  size="40px"
                ></q-avatar>
              </q-item-section>
              <q-item-section class="responsive-text">
                <q-item-label> <b>Settings</b> </q-item-label>
              </q-item-section>
            </template>
            <q-item
              clickable
              v-ripple
              @click="toggleSection('user')"
              :class="{ 'active-item': selectedSection === 'user' }"
            >
              <q-item-section class="q-ml-sm">
                <q-item-label>
                  <q-icon
                    :style="{
                      color: selectedSection === 'user' ? '#006400' : 'inherit',
                    }"
                    name="people"
                    class="q-ml-md q-mr-md"
                  />
                  User</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-expansion-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
    <q-page-container v-if="DashboardView">
      <DashboardView />
    </q-page-container>
    <q-page-container v-if="showbeneficiary">
      <Beneficiary />
    </q-page-container>
    <q-page-container v-if="showlibraries">
      <Libraries />
    </q-page-container>
    <q-page-container v-if="ShowUserAccountView">
      <UserAccountView />
    </q-page-container>
    <q-page-container v-if="showTodosTwo">
      <ToDoos_Two />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";
import Beneficiary from "components/Beneficiary.vue";
import ToDoos_Two from "components/ToDoos_Two.vue";
import DashboardView from "src/components/DashboardView.vue";
import Libraries from "src/components/Libraries.vue";
import UserAccountView from "src/components/UserAccount.vue";

const linksList = [
  {
    title: "Admin",
    // caption: 'quasar.dev',
    caption: "",
    icon: "home",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
    Beneficiary,
    ToDoos_Two,
    DashboardView,
    Libraries,
    UserAccountView,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      selectedSection: "dashboard",
      DashboardView: true,
      showbeneficiary: false,
      ShowUserAccountView: false,
      showlibraries: false,
      showTodosTwo: false,
      management: false,
      settings: false,
    };
  },
  methods: {
    routetologin() {
      this.$router.push("/");
    },

    handleItemClick() {
      // Call both functions here
      this.toggleSection("dashboard");
    },

    handleItemClick_Beneficiary() {
      this.toggleSection("beneficiary");
    },

    handleItemClick_libraries() {
      this.toggleSection("libraries");
    },

    handleItemClick_useraccount() {
      this.toggleSection("useraccount");
    },

    handleItemClick_TODOS() {
      this.toggleSection("ToDoos_Two");
    },

    toggleSubMenu() {
      this.submenuOpen = !this.submenuOpen;
    },

    closeSubMenu() {
      this.submenuOpen = false;
    },
    toggleSection(section) {
      this.showlibraries = section === "libraries";
      this.showbeneficiary = section === "beneficiary";
      this.showTodosTwo = section === "ToDoos_Two";
      this.DashboardView = section === "dashboard";
      this.ShowUserAccountView = section == "useraccount";

      if (section === "dashboard") {
        this.management = false; // Close management expansion item
        this.settings = false; // Close settings expansion item
      } else {
      }
      if (this.selectedSection === section) {
        // If the clicked section is already open, close it
        this.selectedSection = null;
      } else {
        this.selectedSection = null;
        this.selectedSection = section;
      }
    },
  },
});
</script>
<style scoped>
.blendingcolor {
  background: linear-gradient(40deg, #279f27, #5fc331);
}

.default-color {
  background-color: #5f6368;
}

.GNL__toolbar {
  height: 64px;
}

.GNL__toolbar-input {
  width: 55%;
}

.GNL__drawer-item {
  line-height: 24px;
  border-radius: 0 24px 24px 0;
  margin-right: 12px;
}

.GNL__drawer-item .q-item__section--avatar .q-icon {
  color: #5f6368;
}

.GNL__drawer-item .q-item__label {
  color: #3c4043;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
}

.GNL__drawer-footer-link {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
}

.GNL__drawer-footer-link:hover {
  color: #000;
}
</style>
