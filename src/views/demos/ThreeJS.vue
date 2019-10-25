<template>
  <div class="ThreeJS flex1" ref="container">
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({
    name: 'ThreeJS'
  })
  export default class ThreeJS extends Vue {
    scene = null;
    camera = null;
    renderer = null;
    ctnr = null;
    ctnrW = 0;
    ctnrH = 0;
    light = null;
    cube = null;
    animationHandle = 0;

    InitCtnr() {
      this.ctnr = this.$refs.container;
      this.ctnrW = parseInt(getComputedStyle(this.ctnr).width);
      this.ctnrH = parseInt(getComputedStyle(this.ctnr).height);
    }
    InitScene() {
      this.scene = new this.$3.Scene();
      this.scene.name = 'Main';
      this.scene.background = new this.$3.Color(0x1e1e1e);
    }
    InitRenderer() {
      this.renderer = new this.$3.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.ctnrW, this.ctnrH);
      this.renderer.domElement.style.display = 'block';
      this.ctnr.appendChild(this.renderer.domElement);
    }
    InitCamera() {
      this.camera = new this.$3.PerspectiveCamera(103, this.ctnrW / this.ctnrH, 0.1, 2000);
      this.camera.position.set(100, 0, 100);
      this.camera.lookAt(new this.$3.Vector3(0, 0, 0));
      this.scene.add(this.camera);
    }
    InitLight() {
      this.light = new this.$3.DirectionalLight(0xffffff, 1.5);
      this.light.position.set(500, 500, 500);
      this.scene.add(this.light);
    }
    InitCube() {
      let cubeGeometry = new this.$3.CubeGeometry(50, 50, 50, 50, 50, 50)
      let cubeMaterial = new this.$3.MeshLambertMaterial({
        color: 0xff0000
      })
      this.cube = new this.$3.Mesh(cubeGeometry, cubeMaterial);
      this.cube.position.set(0, 0, 0);
      this.scene.add(this.cube);
    }

    Render() {
      this.renderer.render(this.scene, this.camera);

      this.cube.rotation.x += 0.005;
      this.cube.rotation.y += 0.01;

      this.animationHandle = requestAnimationFrame(this.Render);
      console.log('Rendering');
    }
    mounted() {
      this.InitCtnr();
      this.InitScene();
      this.InitCamera();
      this.InitLight();
      this.InitCube();
      this.InitRenderer();
      this.Render();
    }
    beforeDestroy() {
      cancelAnimationFrame(this.animationHandle);
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
