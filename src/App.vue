<template>
  <div id="app" class="app">
    <div class="menu">
      <Menu />
    </div>
    <router-view />
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Menu from './components/Menu.vue';

  @Component({
    components: {
      Menu
    }
  })
  export default class App extends Vue {
    name = 'App';
    mounted() {
    }
  }
</script>
<style lang="scss">
  html, body, .app {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }

  .flex1 {
    flex: 1;
  }
</style>
