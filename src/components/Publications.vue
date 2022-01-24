<template>
  <div>
    <Publication
      v-for="post in this.$store.state.post.posts"
      v-bind:key="post.id_publication"
      v-bind:post="post"
    ></Publication>
  </div>
</template>

<script>
import Publication from "./Publication.vue";

export default {
  components: { Publication },
  name: "Publications",
  mounted() {
    this.$store.dispatch("post/getPosts").then(
      () => {
        console.log("posts récupérer dans le front");
        this.$store.state.post.post = null;
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
      message: "",
    };
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch("post/delete", id);
    },
    openOption(id_publication) {
      if (this.selected_id === id_publication) {
        this.selected_id = null;
      } else {
        this.selected_id = id_publication;
      }
    },
    ifAuteur(id) {
      if (id === this.$store.state.auth.userId) {
        return true;
      }
    },
    dateForPublications(date) {
      return new Intl.DateTimeFormat("fr-FR", {
        hour: "numeric",
        minute: "numeric",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date));
    },
  },
};
</script>
 
<style>
</style>