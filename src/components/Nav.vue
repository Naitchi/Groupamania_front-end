<template>
  <nav class="navbar navbar-light bg-darkblue container-fluid fixed">
    <div class="container-fluid">
      <div class="btn-nav">
        <button type="button" class="btn color">
          <i class="fas fa-home"></i> Accueil
        </button>
        <button type="button" class="btn color">Profil</button>
        <button
          v-on:click="notifShow = !notifShow"
          type="button"
          class="btn color"
        >
          Notifications <span class="badge bg-secondary">4</span>
        </button>
        <div v-show="notifShow" class="liaison"></div>
        <div v-show="notifShow" class="notifbox">
          <div class="notif">
            <img class="pp" src="../assets/pp.jpg" alt="photo de profil" />
            <div class="info-notif">
              <p>
                <span class="user">Un random</span> à commenter votre publication
              </p>
              <h4 class="notif-moment">Jeudi 21 Juin 19h31</h4>
            </div>
          </div>
        </div>
      </div>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          <i class="fas fa-search fa-x2"></i>
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  data: () => ({
    notifShow: false,
  }),
};
</script>
 
<style src="./style.css"></style>