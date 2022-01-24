<template>
  <div>
    <div id="publicationUnique" v-if="getterPost">
      <div class="card big-card">
        <div class="card-top">
          <img
            class="pp"
            :src="getterPost.profilepicture"
            alt="photo de profil"
          />
          <div class="card-info">
            <div class="card-contener">
              <router-link
                :to="{ path: 'user', query: { id: getterPost.id_user } }"
              >
                <h3 class="profil-name">{{ getterPost.nickname }}</h3>
              </router-link>
              <h4 class="publi-moment">
                {{ dateForPublications(getterPost.date_add) }}
              </h4>
            </div>
            <div class="div-option">
              <button
                type="button"
                v-on:click="openOption(getterPost.id_publication)"
                class="btn btn-outline-secondary option"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div
                v-if="selected_id === getterPost.id_publication"
                class="dropdown-content options"
              >
                <button
                  @click="deletePost(getterPost.id_publication)"
                  v-if="ifAuteur(getterPost.id_user)"
                  class="btn btn-secondary"
                >
                  supprimer
                </button>
                <div class="separtion"></div>
                <router-link
                  :to="{
                    path: 'modifyPublication',
                    query: { id: getterPost.id_publication },
                  }"
                >
                  <button
                    v-if="ifAuteur(getterPost.user_id_user)"
                    class="btn btn-secondary"
                  >
                    modifier
                  </button>
                </router-link>
                <div class="separation"></div>
                <button class="btn btn-secondary">signaler</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="getterPost.image">
          <img
            v-bind:src="getterPost.image"
            class="card-img-top big-img"
            alt="random"
          />
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ getterPost.content }}
          </p>
        </div>
        <div class="card-bottom">
          <button
            class="btn box-comment"
            @click="react(getterPost.id_publication)"
          >
            <p :class="{ red: liked }" class="box-comment__p">
              {{ reacts.length }}
            </p>
            <i :class="{ red: liked }" class="fas fa-heart fa-lg"></i>
          </button>
          <div class="btn box-comment">
            <p class="box-comment__p" v-if="comments.length !== 0">
              {{ comments.length }}
            </p>
            <i class="far fa-comment fa-lg"></i>
          </div>
          <button
            @click="sharePostLink(getterPost.id_publication)"
            class="tooltip btn share"
          >
            <span class="tooltiptext" id="myTooltip">{{ copyLinkStatus }}</span>
            <i class="fas fa-share fa-lg"></i>
          </button>
        </div>
        <div class="commenter">
          <input class="commenter__input" type="text" v-model="newComment" />
          <button
            class="commenter__btn"
            @click="postAComment(getterPost.id_publication)"
          >
            Commenter
          </button>
        </div>
        <div class="comment-section">
          <div class="stick"></div>
          <div
            class="comment"
            v-for="comm in comments"
            v-bind:key="comm.id_comment"
          >
            <img
              v-bind:src="comm.profilepicture"
              alt="photo de profile d'un utilisateur"
              class="pp smoll"
            />
            <div class="comment-text">
              <div class="nom">{{ comm.nickname }}</div>
              <div class="date">{{ dateForPublications(comm.date_add) }}</div>
              <div class="content">{{ comm.content }}</div>
            </div>
            <button
              v-if="ifAuteur(comm.user_id_user)"
              class="comment-trash"
              @click="
                deleteAComment(comm.id_comment, comm.publication_id_publication)
              "
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div class="stick"></div>
        </div>
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
    <div id="publicationNews" v-if="post !== undefined">
      <div class="card">
        <div class="card-top">
          <img class="pp" :src="post.profilepicture" alt="photo de profil" />
          <div class="card-info">
            <div class="card-contener">
              <router-link :to="{ path: 'user', query: { id: post.id_user } }">
                <h3 class="profil-name">{{ post.nickname }}</h3>
              </router-link>
              <h4 class="publi-moment">
                {{ dateForPublications(post.date_add) }}
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
                <button
                  @click="deletePost(post.id_publication)"
                  v-if="ifAuteur(post.id_user)"
                  class="btn btn-secondary"
                >
                  supprimer
                </button>
                <div class="separtion"></div>
                <router-link
                  :to="{
                    path: 'modifyPublication',
                    query: { id: post.id_publication },
                  }"
                >
                  <button
                    v-if="ifAuteur(post.id_user)"
                    class="btn btn-secondary"
                  >
                    modifier
                  </button>
                </router-link>
                <div class="separation"></div>
                <button class="btn btn-secondary">signaler</button>
              </div>
            </div>
          </div>
        </div>
        <router-link :to="{ path: 'post', query: { id: post.id_publication } }">
          <div v-if="post.image">
            <img v-bind:src="post.image" class="card-img-top" alt="random" />
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ post.content }}
            </p>
          </div>
        </router-link>
        <div class="card-bottom">
          <button class="btn box-comment" @click="react(post.id_publication)">
            <p :class="{ red: liked }" class="box-comment__p">
              {{ reacts.length }}
            </p>
            <i :class="{ red: liked }" class="fas fa-heart fa-lg"></i>
          </button>
          <button class="btn box-comment" @click="showComments = !showComments">
            <p class="box-comment__p" v-if="comments.length !== 0">
              {{ comments.length }}
            </p>
            <i class="far fa-comment fa-lg"></i>
          </button>

          <button
            @click="sharePostLink(post.id_publication)"
            class="tooltip btn share"
          >
            <span class="tooltiptext" id="myTooltip">{{ copyLinkStatus }}</span>
            <i class="fas fa-share fa-lg"></i>
          </button>
        </div>
        <div v-if="showComments" class="comment-section">
          <div class="stick"></div>
          <div
            class="comment"
            v-for="comm in comments"
            v-bind:key="comm.id_comment"
          >
            <img
              v-bind:src="comm.profilepicture"
              alt="photo de profile d'un utilisateur"
              class="pp smoll"
            />
            <div class="comment-text">
              <div class="nom">{{ comm.nickname }}</div>
              <div class="date">{{ dateForPublications(comm.date_add) }}</div>
              <div class="content">{{ comm.content }}</div>
            </div>
            <button
              v-if="ifAuteur(comm.user_id_user)"
              class="comment-trash"
              @click="
                deleteAComment(comm.id_comment, comm.publication_id_publication)
              "
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div class="stick"></div>
        </div>
        <div class="commenter">
          <input class="commenter__input" type="text" v-model="newComment" />
          <button
            class="commenter__btn"
            @click="postAComment(post.id_publication)"
          >
            Commenter
          </button>
        </div>
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Publication",
  mounted() {
    this.id = this.$route.query.id;
    if (this.id !== undefined) {
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
    } else {
      this.id = this.post.id_publication;
    }
    this.$store.dispatch("comment/getCommentsFromAPost", this.id).then(
      (comments) => {
        this.comments = comments.comments;
        console.log("Comments récupérer");
      },
      (error) => {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    this.$store.dispatch("react/getReactsFromPublication", this.id).then(
      (reacts) => {
        console.log(reacts);
        this.reacts = reacts.reacts;
        if (
          this.reacts.filter(
            (react) => react.user_id_user === this.$store.state.auth.userId
          ).length !== 0
        ) {
          this.liked = true;
        }
        console.log(this.liked);
      },
      (error) => {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  props: ["post"],
  data() {
    return {
      message: "",
      selected_id: null,
      newComment: "",
      showComments: false,
      comments: [],
      reacts: [],
      copyLinkStatus: "Copier le lien du post.",
      liked: false,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
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
      if (
        id === this.$store.state.auth.userId ||
        this.$store.state.user.adminMode === true
      ) {
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
    postAComment(id) {
      //revoir cette fonction (pas opti du tout)
      this.id = this.$route.query.id;
      const data = {
        publication_id_publication: id,
        user_id_user: this.$store.state.auth.userId,
        content: this.newComment,
      };
      console.log(data);
      this.$store.dispatch("comment/postComment", data).then(
        () => {
          console.log("Commentaire publié !");
          this.$store
            .dispatch("comment/getCommentsFromAPost", this.post.id_publication)
            .then(
              (comments) => {
                this.comments = comments;
              },
              (error) => {
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      if (this.id !== undefined) {
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
        this.$store.dispatch("comment/getCommentsFromAPost", this.id).then(
          (comments) => {
            this.comments = comments.comments;
            console.log("Comments récupérer");
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      } else {
        this.$store
          .dispatch("comment/getCommentsFromAPost", this.post.id_publication)
          .then(
            (comments) => {
              this.comments = comments.comments;
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
      }
      this.newComment = "";
    },
    addReact(id) {
      const data = {
        id_publication: id,
        id_user: this.$store.state.auth.userId,
      };
      console.log(data);

      this.$store.dispatch("react/add", data).then(
        () => {
          console.log("Réaction ajouté !");
          this.$store
            .dispatch(
              "react/getReactsFromPublication",
              this.post.id_publication
            )
            .then(
              (reacts) => {
                this.reacts = reacts.reacts;
              },
              (error) => {
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    deleteReact(id) {
      const data = {
        id_user: this.$store.state.auth.userId,
        id_publication: id,
      };
      console.log(data);

      this.$store.dispatch("react/deleteReact", data).then(
        () => {
          console.log("Réaction supprimé !");
          this.$store
            .dispatch("react/getReactsFromPublication", data.id_publication)
            .then(
              (reacts) => {
                this.reacts = reacts.reacts;
              },
              (error) => {
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    react(id) {
      if (this.liked === true) {
        this.deleteReact(id);
      } else {
        this.addReact(id);
      }
      this.liked = !this.liked;
    },
    sharePostLink(id) {
      const copyText = "http://localhost:8080/post?id=" + id;
      navigator.clipboard.writeText(copyText);
      this.copyLinkStatus = "Lien Copié! ✅";
    },
    deleteAComment(idComment, idPublication) {
      this.$store.dispatch("comment/delete", idComment).then(
        () => {
          console.log("commentaire supprimé !");
          this.$store
            .dispatch("comment/getCommentsFromAPost", idPublication)
            .then(
              (comments) => {
                this.comments = comments.comments;
                console.log("Comments récupérer");
              },
              (error) => {
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
  computed: {
    ...mapGetters("post", ["getterPost"]),
  },
};
</script>

<style lang="scss">
@import "../assets/styles/style.css";
.red {
  color: #dc3545;
}
.card-top {
  width: 90%;
}
.big-card {
  width: 100%;
}
.card {
  align-items: center;
}
.card-bottom {
  width: 100%;
}
a {
  text-decoration: none !important;
}
.comment {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
  width: 100%;
  &-text {
    margin-left: 10px;
    width: 78%;
  }
}
.commenter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin-bottom: 15px;
  &__input {
    border-radius: 20px;
    width: 250px;
  }

  &__btn {
    border: none;
    border-radius: 15px;
    background-color: #cc6666;
    font-weight: 500;
  }
}
.smoll {
  width: 50px !important;
  height: 50px !important;
}
.box-comment {
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65px;
  &__p {
    margin-bottom: 0;
    font-weight: bold;
  }
}
.stick {
  width: 100px;
  height: 2px;
  color: grey;
}
.date {
  font-size: 0.7rem;
  color: grey;
}
.comment-section {
  width: 90%;
}
.big-img {
  max-width: 720px !important;
  width: 100% !important;
  height: unset !important;
}
//copier le lien d'un post
.tooltip {
  position: relative !important;
  display: inline-block !important;
  opacity: 1 !important;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>