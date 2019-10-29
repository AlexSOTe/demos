<template>
  <div class="ThreeJS flex1" ref="container">
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ThreeDemo from '@/js/threejsDemo';

  @Component({
    name: 'ThreeJS'
  })
  export default class ThreeJS extends Vue {
    mounted() {
      ThreeDemo(this.$refs.container)
    }
    beforeDestroy() {
      this.$store.commit('CancelAnimation');
    }
  }
</script>
<style scoped>
  .ThreeJS canvas {
    display: block;
    margin: 0;
    padding: 0;
  }
</style>
