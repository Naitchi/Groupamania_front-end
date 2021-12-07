<template>
  <div id="profil">
    <div class="banniere"></div>
    <img
      :src="getUser.profilepicture"
      alt="Photo de profile de l'utilisateur !"
    />
    <a v-if="disabled == 0" href="#modify-pp">chnager la pp</a>
    <label for="nom">Pseudo :</label>
    <input
      v-model="user.nickname"
      v-validate="'required|min:3|max:45'"
      id="nom"
      type="text"
      :disabled="disabled == 1"
    />
    <label for="description">Description :</label>
    <textarea
      v-model="user.description"
      v-validate="'required|min:0|max:300'"
      id="description"
      type="text"
      :disabled="disabled == 1"
    />
    <label for="email">Email :</label>
    <input
      v-model="user.email"
      v-validate="'required|email|max:35'"
      id="email"
      type="email"
      :disabled="disabled == 1"
    />
    <a v-if="disabled == 0" href="#modify-mdp">Changer votre mot de passe</a>
    <label for="tel">Numéro de Téléphone :</label>
    <input v-model="user.phone" id="tel" type="tel" :disabled="disabled == 1" />
    <label for="birthday">Date d'anniversaire :</label>
    <p v-if="disabled == 1">{{ dateForProfile(user.birthday) }}</p>
    <input
      v-model="user.birthday"
      id="birthday"
      type="date"
      v-if="disabled == 0"
    />
    <div v-if="disabled == 0">
      <button @click="modifyUser()" class="btn btn-primary btn-block confirm">
        Valider
      </button>
      <button @click="resetUser()" class="btn btn-primary btn-block confirm">
        Annuler
      </button>
    </div>
    <button v-if="openModif()" @click="disabled = (disabled + 1) % 2">
      Modifier le profile
    </button>

    <!-- Modal MDP-->
    <div class="modal-wrapper" id="modify-mdp">
      <div class="modal-body card">
        <div class="modal-header">
          <h2 class="heading">Modification de Mot de passe</h2>
          <a
            href="#!"
            role="button"
            class="close"
            aria-label="close this modal"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </a>
        </div>
        <label for="old-mdp">Ancien mot de passe</label>
        <input v-model="oldPassword" id="old-mdp" type="password" />
        <label for="mdp">Nouveau mot de passe</label>
        <input
          v-model="newPassword"
          v-validate="'required|min:8|max:40'"
          id="mdp"
          type="password"
        />
        <label for="checkmdp">Confirmé votre nouveau mot de passe</label>
        <input
          v-model="checkmdp"
          v-validate="'required|min:8|max:40'"
          id="checkmdp"
          type="password"
        />
        <div v-if="newPassword != checkmdp" class="alert-danger">
          <p>Les mots de passes ne sont identique</p>
        </div>
        <button
          :disabled="newPassword != checkmdp"
          @click="modifyPassword()"
          class="valide-modify-mdp"
        >
          Valider
        </button>
      </div>

      <a href="#!" class="outside-trigger"></a>
    </div>

    <!-- Modal PP-->
    <div class="modal-wrapper" id="modify-pp">
      <div class="modal-body card">
        <div class="modal-header">
          <h2 class="heading">Modification de photo de profil</h2>
          <a
            href="#!"
            role="button"
            class="close"
            aria-label="close this modal"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </a>
        </div>
        <input type="file" accept="image/*" @change="onFileChange" ref="file" />
        <button @click="modifyPP()" class="valide-modify-mdp">Valider</button>
      </div>

      <a href="#!" class="outside-trigger"></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  async mounted() {
    await this.sleep(50);
    this.id = this.$route.query.id;
    this.$store.dispatch("user/setUser", this.id).then(
      (user) => {
        this.user = { ...user };
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
      user: {},
      disabled: 1,
      date_value: new Date(),
      oldPassword: "",
      newPassword: "",
      checkmdp: "",
      newPP: "",
    };
  },
  methods: {
    modifyPP() {
      const formData = new FormData();
      formData.append("image", this.newPP);
      console.log(this.$store.state.auth.userId);
      formData.append("id_user", this.$store.state.auth.userId);
      this.$store.dispatch("user/modifyPP", formData).then(() => {
        this.$refs.file.value = "";
        this.image = "";
      });
      this.resetUser();
    },
    openModif() {
      const user_login = this.$store.state.auth.userId;
      const id = this.$route.query.id;
      console.log(user_login + id);
      if (user_login == id) {
        return true;
      } else {
        return false;
      }
    },
    modifyUser() {
      const formData = FormData();
      //voir si y'a qlqc dans chaque input
      formData.append(); //faire boucle de user
      this.$store.dispatch("user/modifyUser", formData);
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    dateForProfile(date) {
      return new Intl.DateTimeFormat("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date));
    },
    resetUser() {
      this.user = { ...this.$store.state.user.userProfile };
    },
    onFileChange(e) {
      this.newPP = e.target.files[0];
    },
    removeImage() {
      this.image = "";
    },
    modifyPassword() {
      const data = {
        email: this.$store.state.user.userProfile.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      };
      this.$store.dispatch("user/modifyPassword", data).then(
        () => {
          this.resetUser();
          this.oldPassword = "";
          this.newPassword = "";
          console.log("posts récupérer dans le front");
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
};
</script>
 
<style>
@import "../assets/styles/style.css";

#profil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.modal-header {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.close {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  height: 16px;
  text-decoration: none;
  width: 16px;
}
svg {
  width: 16px;
}
.modal-wrapper {
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

#modify-pp {
  opacity: 0;
  visibility: hidden;
}

#modify-pp:target {
  opacity: 1;
  visibility: visible;
}

#modify-pp:target > .modal-body {
  opacity: 1;
  transform: translateY(1);
}

#modify-mdp {
  opacity: 0;
  visibility: hidden;
}

#modify-mdp:target {
  opacity: 1;
  visibility: visible;
}

#modify-mdp:target > .modal-body {
  opacity: 1;
  transform: translateY(1);
}
.modal-body {
  max-width: 500px;
  opacity: 0;
  transform: translateY(-100px);
  width: 100%;
  z-index: 1;
}
.outside-trigger {
  bottom: 0;
  cursor: default;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.button__link {
  text-decoration: none;
}
</style> 