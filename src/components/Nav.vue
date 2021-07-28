<template>
  <nav class="navbar navbar-light bg-darkblue container-fluid fixed">
    <div class="nav">
      <div class="btn-nav">
        <button type="button" class="btn color">
          <i class="fas fa-home"></i> Accueil
        </button>
        <button type="button" class="btn color">Profil</button>
        <button v-on:click="booleanChange()" type="button" class="btn color">
          Notifications
          <span class="badge bg-secondary">4</span>
        </button>
        <button @click.prevent="logOut" type="button" class="btn color">
          <i class="fas fa-sign-out-alt"></i>
        </button>
        <div v-show="hasNotifValue()" class="liaison"></div>
        <div v-show="hasNotifValue()" class="notifbox">
          <div class="notif">
            <img class="pp" src="../assets/pp.jpg" alt="photo de profil" />
            <div class="info-notif">
              <p>
                <span class="user">Un random</span> à commenter votre
                publication
              </p>
              <h4 class="notif-moment">Jeudi 21 Juin 19h31</h4>
            </div>
          </div>
        </div>
      </div>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          <i class="fas fa-search fa-x2"></i>
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import store from "../store";
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapGetters([
      "getNotifValue",
      // ...
    ]),
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    booleanChange() {
      store.commit("showChange");
    },
    hasNotifValue() {
      return store.getters["getNotifValue"];
    },
  },
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>