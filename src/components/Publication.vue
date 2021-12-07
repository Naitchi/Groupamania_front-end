<template>
  <div>
    <div
      id="publication"
      v-for="post in this.$store.state.post.posts"
      :key="post.id_publication"
    >
      <div class="card">
        <div class="card-top">
          <img class="pp" :src="post.profilepicture" alt="photo de profil" />
          <div class="card-info">
            <div class="card-contener">
              <router-link
                :to="{ path: 'user', query: { id: post.user_id_user } }"
              >
                <h3 class="profil-name">{{ post.nickname }}</h3></router-link
              >
              <h4 class="publi-moment">
                {{
                  new Intl.DateTimeFormat("fr-FR", {
                    hour: "numeric",
                    minute: "numeric",
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
                v-on:click="openOption(post.id_publication)"
                class="btn btn-outline-secondary option"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div
                v-if="selected_id === post.id_publication"
                class="dropdown-content options"
              >
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
      selected_id: null,
    };
  },
  methods: {
    openOption(id_publication) {
      if (this.selected_id === id_publication) {
        this.selected_id = null;
      } else {
        this.selected_id = id_publication;
      }
    },
  },
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>