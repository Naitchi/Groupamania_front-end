<template>
      <div class="main-container bg-light">
        <Publication/>
      </div>
</template>


<script>
import Publication from './Publication';
import store from '../store';

export default {
  name: "News",
  components: { Publication },

  data: () => ({
  }),
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>