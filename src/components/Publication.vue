<template>
  <div class="card">
    <div class="card-top">
      <img class="pp" src="../assets/pp.jpg" alt="photo de profil" />
      <div class="card-info">
        <div class="card-contener">
          <h3 class="profil-name">Benjamin Clairotte</h3>
          <h4 class="publi-moment">Jeudi 21 Juin 19h31</h4>
        </div>
        <div class="div-option">
          <button
            type="button"
            v-on:click="show = !show"
            class="btn btn-outline-secondary option"
          >
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <div v-if="show" class="dropdown-content options">
            <button class="btn btn-secondary">supprimer</button>
            <div class="separtion"></div>
            <button class="btn btn-secondary">modifier</button>
            <div class="separation"></div>
            <button class="btn btn-secondary">signaler</button>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/body.png" class="card-img-top" alt="random" />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <div class="card-bottom">
      <button class="btn like"><i class="fas fa-heart fa-lg"></i></button>
      <button class="btn comment"><i class="far fa-comment fa-lg"></i></button>
      <button class="btn share"><i class="fas fa-share fa-lg"></i></button>
    </div>
  </div>
</template>


<script>

export default {
  name: "Publication",

  data: () => ({
    show: false,
  }),
  methods: {},
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>