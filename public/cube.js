import { scene } from './scene.js';
import * as THREE from 'three';

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0.5, 0);
scene.add(cube);

const movement = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  touchX: null,
  touchY: null
};

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyW':
      movement.forward = true;
      break;
    case 'KeyA':
      movement.left = true;
      break;
    case 'KeyS':
      movement.backward = true;
      break;
    case 'KeyD':
      movement.right = true;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyW':
      movement.forward = false;
      break;
    case 'KeyA':
      movement.left = false;
      break;
    case 'KeyS':
      movement.backward = false;
      break;
    case 'KeyD':
      movement.right = false;
      break;
  }
});

document.addEventListener('touchstart', (event) => {
  event.preventDefault();
  movement.touchX = event.touches[0].clientX;
  movement.touchY = event.touches[0].clientY;
});

document.addEventListener('touchmove', (event) => {
  event.preventDefault();
  const deltaX = event.touches[0].clientX - movement.touchX;
  const deltaY = event.touches[0].clientY - movement.touchY;
  cube.position.x += deltaX * 0.01;
  cube.position.z -= deltaY * 0.01;
  movement.touchX = event.touches[0].clientX;
  movement.touchY = event.touches[0].clientY;
});

export { cube, movement };