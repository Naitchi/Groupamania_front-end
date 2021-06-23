<template>
  <div id="signup">
    <h2>Créer un compte :</h2>
    <label for="nom">Nom</label>
    <input id="nom" type="text" />
    <label for="email">Email</label>
    <input id="email" type="email" />
    <label for="mdp">Mot de passe</label>
    <input id="mdp" type="password" />
    <label for="checkmdp">Confirmé votre mot de passe</label>
    <input id="checkmdp" type="password" />
    <label for="tel">Numéro de Téléphone</label>
    <input id="tel" type="tel" />
    <label for="birthday">Date d'anniversaire</label>
    <input id="birthday" type="date" />

    <a @click="goSignin()">Déjà un compte ? Connectez-vous ici</a>
  </div>
</template>

<script>
export default {
  name: "Signup",
  methods: {
    goSignin() {
      this.$emit("goSignin");
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>
