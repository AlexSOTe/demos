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

  let bezier = null;
  @Component({
    name: 'Bezier'
  })
  export default class Bezier extends Vue {
    mounted() {
      let canvas = document.querySelector('#canvas');
      let points = '0,0 200,10 200,200 120,370';
      bezier = new CreateBezier(canvas, points);
    }
    beforeDestroy() {
      bezier.BezierTimerDestory();
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
