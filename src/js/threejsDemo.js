import * as THREE from 'three';
import store from '@/store/store';

export default function ThreeDemo(el) {
  let obj = {
    scene: null,
    camera: null,
    renderer: null,
    ctnr: el,
    ctnrW: 0,
    ctnrH: 0,
    light: null,
    cube: null
  };

  function InitCtnr() {
    obj.ctnrW = parseInt(getComputedStyle(obj.ctnr).width);
    obj.ctnrH = parseInt(getComputedStyle(obj.ctnr).height);
  }
  function InitScene() {
    obj.scene = new THREE.Scene();
    obj.scene.name = 'Main';
    obj.scene.background = new THREE.Color(0x1e1e1e);
  }
  function InitRenderer() {
    obj.renderer = new THREE.WebGLRenderer({ antialias: true });
    obj.renderer.setPixelRatio(window.devicePixelRatio);
    obj.renderer.setSize(obj.ctnrW, obj.ctnrH);
    obj.renderer.domElement.style.display = 'block';
    obj.ctnr.appendChild(obj.renderer.domElement);
  }
  function InitCamera() {
    obj.camera = new THREE.PerspectiveCamera(103, obj.ctnrW / obj.ctnrH, 0.1, 2000);
    obj.camera.position.set(100, 0, 100);
    obj.camera.lookAt(new THREE.Vector3(0, 0, 0));
    obj.scene.add(obj.camera);
  }
  function InitLight() {
    obj.light = new THREE.DirectionalLight(0xffffff, 1.5);
    obj.light.position.set(500, 500, 500);
    obj.scene.add(obj.light);
  }
  function InitCube() {
    let cubeGeometry = new THREE.CubeGeometry(50, 50, 50, 50, 50, 50);
    let cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000
    });
    obj.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    obj.cube.position.set(0, 0, 0);
    obj.scene.add(obj.cube);
  }

  function Render() {
    console.log('Rendering');
    obj.renderer.render(obj.scene, obj.camera);

    obj.cube.rotation.x += 0.005;
    obj.cube.rotation.y += 0.01;

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

  return obj;
}
