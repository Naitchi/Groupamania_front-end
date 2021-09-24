<template>
  <div class="signin">
    <h2>Connectez-vous :</h2>
    <form class="signin" name="form" @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input
        v-model="user.email"
        v-validate="'required'"
        id="email"
        type="email"
      />
      <div
        v-if="errors.has('nickname')"
        class="alert alert-danger"
        role="alert"
      >
        Le champ Email est requis !
      </div>
      <label for="password">Mot de passe</label>
      <input
        v-model="user.password"
        v-validate="'required'"
        id="password"
        type="password"
      />
      <div
        v-if="errors.has('password')"
        class="alert alert-danger"
        role="alert"
      >
        Un Mot de passe est requis!
      </div>
      <button :disabled="loading" class="btn btn-primary btn-block confirm">
        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
        Ce connecté
      </button>
    </form>
    <a @click="goSignup()">Pas de compte ? Inscrivez-vous ici</a>
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
import User from "../models/user.js";

export default {
  name: "Signin",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/main");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.email && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/main");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },

    //fct pour changer composent
    goSignup() {
      this.$emit("goSignup");
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>
