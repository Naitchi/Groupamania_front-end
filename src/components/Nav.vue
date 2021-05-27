<template>
  <nav class="navbar navbar-light bg-darkblue container-fluid fixed">
    <div class="container-fluid">
      <div class="btn-nav">
        <button type="button" class="btn color">
          <i class="fas fa-home"></i> Accueil
        </button>
        <button type="button" class="btn color">Profil</button>
        <button type="button" class="btn color">
          Notifications <span class="badge bg-secondary">4</span>
        </button>
        <div class="notifbox">
          <div class="notif"></div>
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