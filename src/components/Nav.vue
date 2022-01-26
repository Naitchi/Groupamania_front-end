<template>
  <nav class="navbar navbar-light bg-darkblue container-fluid fixed">
    <div class="nav">
      <div class="btn-nav">
        <router-link :to="{ path: 'main' }">
          <button type="button" class="btn color">
            <i class="fas fa-home"></i> Accueil
          </button>
        </router-link>
        <router-link :to="{ path: 'user', query: { id: getMyId } }">
          <button type="button" class="btn color">Profil</button>
        </router-link>
        <button @click.prevent="logOut" type="button" class="btn color">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
    <div class="nav-right">
      <button
        v-if="getMe === 0"
        :class="{ active: this.$store.state.user.adminMode }"
        class="btn color admin"
        @click="adminMode()"
      >
        Mode Admin
      </button>
      <h1 class="nav-logo">Groupamania</h1>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  mounted() {
    console.log(this.$route.name);
    this.ownProfile = 1;
    this.main = 1;
    if (this.$route.name === "main") {
      this.main = 0;
    }
    if (this.$route.name === "profile" && this.$route.params === this.getMyId) {
      this.ownProfile = 0;
    }
  },
  data() {
    return {
      main: 1,
      ownProfile: 1,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    adminMode() {
      this.$store.state.user.adminMode = !this.$store.state.user.adminMode;
    },
  },
  computed: {
    ...mapGetters("auth", ["getMe", "getMyId"]),
  },
};
</script>
 
<style lang="scss">
@import "../assets/styles/style.css";

nav {
  z-index: 2000 !important;
  .nav {
    width: unset !important;
  }
  .nav-logo {
    font-size: 2rem !important;
    background-color: #d47d7d;
    border-radius: 0 0 10px 0;
    margin-bottom: 0 !important;
    padding: 0 5px;
  }
  .nav-right {
    display: flex;
    flex-direction: row;
    width: 320px;
    justify-content: space-between;
  }
  .admin {
    border-bottom: 3px solid #b33939 !important;
  }
  .active {
    border-top: 3px solid #b33939 !important;
    border-bottom: none !important;
  }
}
</style>