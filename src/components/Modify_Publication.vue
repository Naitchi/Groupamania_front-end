<template>
  <div>
    <div id="publication" v-if="getterPost">
      <h2>Modifier la publication :</h2>
      <div>
        <img v-bind:src="getterPost.image" class="card-img-top" alt="random" />
        <input type="file" accept="image/*" @change="onFileChange" ref="file" />
      </div>
      <div class="card-body">
        <textarea
          v-model="newContent"
          class="card-text"
          :placeholder="getterPost.content"
        >
        </textarea>
      </div>
      <button @click="modifyThePost()" class="valide-modify-mdp">
        Valider
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modify_Publication",
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.$store.dispatch("post/getPost", this.id).then(
      () => {
        console.log("post récupérer dans le front");
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
      selected_id: null,
      newImage: "",
      newContent: "",
    };
  },
  methods: {
    modifyThePost() {
      const formData = new FormData();
      console.log(this.getterPost.id_publication);
      formData.append("id_publication", this.getterPost.id_publication);
      if (this.newImage === "") {
        //si l'image n'est pas modifié
        if (this.newContent === "") {
          return console.log("aucune modification");
        }
        const data = {
          content: this.newContent,
          id_publication: this.getterPost.id_publication,
        };
        this.$store.dispatch("post/modifyPostContent", data).then(
          () => {
            this.$router.push("/post?id=" + this.getterPost.id_publication);
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      } else {
        //si l'image veut être modifié
        if (this.newContent === "") {
          formData.append("content", this.getterPost.content);
        } else {
          formData.append("content", this.newContent);
        }
        formData.append("image", this.newImage);
        this.$store.dispatch("post/modifyPost", formData).then(
          () => {
            this.$router.push("/post?id=" + this.getterPost.id_publication);
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
      //ramener sur l'autre page
    },
    onFileChange(e) {
      this.newImage = e.target.files[0];
    },
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
  computed: {
    ...mapGetters("post", ["getterPost"]),
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>