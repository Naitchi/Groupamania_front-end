<template>
  <div id="connection">
    <div id="index">
      <div class="titre">
        <h1>Groupamania</h1>
      </div>
    </div>

    <Signup v-if="this.signup" v-on:goSignin="turn"></Signup>
    <Signin v-if="!this.signup" v-on:goSignup="turn"></Signin>
  </div>
</template>

<script>
import Signin from "./Signin.vue";
import Signup from "./Signup.vue";

export default {
  components: {
    Signup,
    Signin,
  },
  name: "Carousel",
  data() {
    return {
      signup: true,
    };
  },
  methods: {
    turn() {
      this.signup = !this.signup;
      console.log(this.signup);
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>