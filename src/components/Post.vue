<template>
  <div class="main-container bg-light">
    <form @submit.prevent="postAPubli">
      <textarea
        v-model="message"
        name="post-textarea"
        id="textarea"
        placeholder="Partager quelque chose qui vous tiens à coeur !"
      ></textarea>
      <input type="file" accept="image/*" @change="onFileChange" ref="file" />
      <button @click="removeImage">Remove image</button>
      <button class="btn btn-post publier">Publier</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "Post",

  data() {
    return {
      message: "",
      image: "",
    };
  },
  methods: {
    postAPubli() {
      const formData = new FormData();
      formData.append("content", this.message);
      formData.append("image", this.image);
      formData.append("id_user", this.$store.state.user_id);
      this.$store.dispatch("post/post", formData);
    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        this.$refs.file.value = "";
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
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