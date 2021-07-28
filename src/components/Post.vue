<template>
  <div class="main-container bg-light">
    <textarea
      v-model="message"
      name="post-textarea"
      id="textarea"
      placeholder="Partager quelque chose qui vous tiens à coeur !"
    ></textarea>
    <button @click="postPublication" class="btn btn-post publier">
      Publier
    </button>
  </div>
</template>


<script>
import PubliService from "../services/PubliService";

export default {
  name: "Post",

  data() {
    return {
      message: "",
    };
  },
  methods: {
    postPublication() {
      const data = {
        id_user: this.$store.state.user_id,
        content: this.message,
      };
      console.log(data);
      PubliService.create(data)
        .then((response) => {
          console.log(response);
          this.message = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
 
<style>
@import "../assets/styles/style.css";

#textarea {
  width: 600px;
  height: 120px;
  border: 3px solid #cccccc;
  padding: 5px;
  border-radius: 1%;
  resize: none;
}

.publier {
  position: relative;
  top: -51px;
  right: -244px;
}

.btn-post {
  color: #fff !important;
  background-color: #091f43 !important;
  border-color: #091f43 !important;
  padding: 4px 8px !important;
}

#textarea:focus-visible {
  outline: 0 !important;
}
</style>