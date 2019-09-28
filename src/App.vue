<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Menu from '@/components/Menu';

  @Component({
    components: {
      Menu
    }
  })
  export default class App extends Vue {
    name = 'App';
  }
</script>
<style lang="scss">

  html, body {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
