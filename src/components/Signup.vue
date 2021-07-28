<template>
  <div class="signup">
    <h2>Créer un compte :</h2>
    <form id="signup" name="form" @submit.prevent="handleRegister">
      <label for="nom">Nom</label>
      <input
        v-model="user.nickname"
        v-validate="'required|min:3|max:45'"
        id="nom"
        type="text"
      />
      <div v-if="submitted && errors.has('nickname')" class="alert-danger">
        {{ errors.first("nickname") }}
      </div>
      <label for="email">Email</label>
      <input
        v-model="user.email"
        v-validate="'required|email|max:35'"
        id="email"
        type="email"
      />
      <label for="mdp">Mot de passe</label>
      <input
        v-model="user.password"
        v-validate="'required|min:8|max:40'"
        id="mdp"
        type="password"
      />
      <div v-if="submitted && errors.has('password')" class="alert-danger">
        {{ errors.first("password") }}
      </div>
      <label for="checkmdp">Confirmé votre mot de passe</label>
      <input
        v-model="checkmdp"
        v-validate="'required|min:8|max:40'"
        id="checkmdp"
        type="password"
      />
      <div v-if="user.password != checkmdp" class="alert-danger">
        <p>Les mots de passes ne sont identique</p>
      </div>
      <label for="tel">Numéro de Téléphone</label>
      <input v-model="user.phone" id="tel" type="tel" />
      <label for="birthday">Date d'anniversaire</label>
      <input v-model="user.birthday" id="birthday" type="date" />
      <button :disabled="loading" class="btn btn-primary btn-block confirm">
        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
        S'inscrire
      </button>
      <a @click="goSignin()">Déjà un compte ? Connectez-vous ici</a>
    </form>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import User from "../models/user.js";

export default {
  name: "Signup",
  data() {
    return {
      user: new User("", "", "", "", ""),
      loading: false,
      message: "",
      submitted: false,
      successful: false,
      checkmdp: "",
    };
  },
  computed: {
    loggedIn() {
      console.log("test");
      console.log(this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/main");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },

    //fct pour changer composent
    goSignin() {
      this.$emit("goSignin");
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>
