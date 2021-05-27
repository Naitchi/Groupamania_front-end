<template>
  <div id="app">
    <Nav />
    <News />
  </div>
</template>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
  crossorigin="anonymous"
></script>

<script>
import Nav from "./components/Nav";
import News from "./components/News";

export default {
  name: "App",

  components: {
    Nav,
    News,
  },

  data: () => ({
    //
  }),
};
</script>
