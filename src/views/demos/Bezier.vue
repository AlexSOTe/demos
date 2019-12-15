<template>
  <div class="Bezier flex1" ref="ctnr">
    <canvas id="canvas"
            ref="canvas"
            width="375"
            height="375"></canvas>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator';
  import CreateBezier from '../../js/bezier';

  @Component({
    name: 'Bezier'
  })
  export default class Bezier extends Vue {
    mounted() {
      new CreateBezier(
        document.querySelector('#canvas'),
        '0,0 200,10 200,200 120,370'
      )
    }
  }
</script>
<style scoped>
  .Bezier {
    position: relative;
    width: 100%;
  }

  .Bezier > canvas {
    margin: 0 auto;
    display: block;
    width: 375px;
    height: 375px;
    outline: 1px solid #ddd;
  }
</style>
