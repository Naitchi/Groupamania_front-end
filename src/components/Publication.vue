<template>
  <div>
    <div
      id="publication"
      v-for="post in this.$store.state.post.posts"
      :key="post.id_publication"
    >
      <div class="card">
        <div class="card-top">
          <img class="pp" src="../assets/pp.jpg" alt="photo de profil" />
          <div class="card-info">
            <div class="card-contener">
              <h3 class="profil-name">Benjamin Clairotte</h3>
              <h4 class="publi-moment">
                {{
                  new Intl.DateTimeFormat("fr-FR", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.date_add))
                }}
              </h4>
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
        <div v-if="post.image">
          <img v-bind:src="post.image" class="card-img-top" alt="random" />
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>
        <div class="card-bottom">
          <button class="btn like"><i class="fas fa-heart fa-lg"></i></button>
          <button class="btn comment">
            <i class="far fa-comment fa-lg"></i>
          </button>
          <button class="btn share"><i class="fas fa-share fa-lg"></i></button>
        </div>
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publication",
  created() {
    this.$store.dispatch("post/getPosts").then(
      () => {
        console.log("posts récupérer dans le front");
      },
      (error) => {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  data() {
    return {
      show: false,
      message: "",
    };
  },
  methods: {},
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>