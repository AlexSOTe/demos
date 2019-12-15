import * as THREE from 'three';
import store from '@/store/store';

export default function ThreeDemo(el) {
  let scene = null;
  let camera = null;
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  let ctnrW = 0;
  let ctnrH = 0;
  let light = new THREE.DirectionalLight(0xffffff, 1.5);
  let cube = null;

  function InitCtnr() {
    ctnrW = parseInt(getComputedStyle(el).width);
    ctnrH = parseInt(getComputedStyle(el).height);
  }
  function InitScene() {
    scene = new THREE.Scene();
    scene.name = 'Main';
    scene.background = new THREE.Color(0x1e1e1e);
  }
  function InitRenderer() {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(ctnrW, ctnrH);
    renderer.domElement.style.display = 'block';
    el.appendChild(renderer.domElement);
  }
  function InitCamera() {
    camera = new THREE.PerspectiveCamera(103, ctnrW / ctnrH, 0.1, 2000);
    camera.position.set(100, 0, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
  }
  function InitLight() {
    light.position.set(500, 500, 500);
    scene.add(light);
  }
  function InitCube() {
    let cubeGeometry = new THREE.CubeGeometry(50, 50, 50, 50, 50, 50);
    let cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000
    });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    scene.add(cube);
  }

  function Render() {
    console.log('Rendering');
    renderer.render(scene, camera);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;

    let animationHandle = requestAnimationFrame(Render);
    store.commit('SetAnimation', animationHandle);
  }

  InitCtnr();
  InitScene();
  InitCamera();
  InitLight();
  InitCube();
  InitRenderer();
  Render();
}
