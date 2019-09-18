<template>
  <div class="Menu">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default class Menu extends Vue {
    name = 'Menu';
  }
</script>
<style scoped>
  .Menu {
    padding: 30px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
</style>
