<template>
  <div class="post-container bg-light">
    <div class="formpost">
      <div class="imgPost">
        <input type="file" accept="image/*" @change="onFileChange" ref="file" />
        <button @click="removeImage">Remove image</button>
      </div>
      <textarea
        v-model="message"
        name="post-textarea"
        id="textarea"
        placeholder="Partager quelque chose qui vous tiens à coeur !"
      ></textarea>

      <button @click="postAPubli" class="btn btn-post publier">Publier</button>
    </div>
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
      formData.append("id_user", this.$store.state.auth.userId);
      this.$store.dispatch("post/post", formData).then(() => {
        this.message = "";
        this.$refs.file.value = "";
        this.image = "";
      });
    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    removeImage() {
      this.image = "";
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
.post-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

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
  top: -54px;
  right: -258px;
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

.formpost {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 220px;
}
</style>