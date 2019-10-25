<template>
  <div class="CubeDemo flex1">
    <ul class="cube">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({
    name: 'CubeDemo'
  })
  export default class CubeDemo extends Vue { }
</script>
<style scoped>
  .CubeDemo {
    position: relative;
    margin: 0 auto 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    perspective: 1000px;
  }

  @keyframes Rotate {
    from {
      transform: translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    to {
      transform: translate(-50%,-50%) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  .cube {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotateX(30deg);
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    animation: Rotate 5s linear infinite;
  }

  .cube > li {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: all linear 1s;
    /*backface-visibility: hidden;*/
  }

  .cube > li:nth-child(1) {
    transform: translateZ(75px);
    background-color: pink;
  }

  .cube > li:nth-child(2) {
    transform-origin: left center;
    transform: translateZ(-75px) rotateY(-90deg);
    background-color: orange;
  }

  .cube > li:nth-child(3) {
    transform-origin: right center;
    transform: translateZ(-75px) rotateY(90deg);
    background-color: yellow;
  }

  .cube > li:nth-child(4) {
    transform-origin: top center;
    transform: translateZ(-75px) rotateX(90deg);
    background-color: lawngreen;
  }

  .cube > li:nth-child(5) {
    transform-origin: bottom center;
    transform: translateZ(-75px) rotateX(-90deg);
    background-color: lawngreen;
  }

  .cube > li:nth-child(6) {
    transform: translateZ(-75px);
    background-color: mediumpurple;
  }
</style>
