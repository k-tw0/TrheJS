import { cube, movement } from './cube.js';
import { camera, renderer, scene } from './scene.js';

function animate() {
  requestAnimationFrame(animate);

  // Movimiento del cubo
  if (movement.forward) cube.position.z -= 0.1;
  if (movement.backward) cube.position.z += 0.1;
  if (movement.left) cube.position.x -= 0.1;
  if (movement.right) cube.position.x += 0.1;

  // Movimiento de la cámara
  camera.position.x += (cube.position.x - camera.position.x) * 0.05;
  camera.position.y += (cube.position.y - camera.position.y + 3) * 0.05;
  camera.position.z += (cube.position.z - camera.position.z + 5) * 0.05;
  camera.lookAt(cube.position);
  
  renderer.render(scene, camera);
  }
  
  export {animate, cube, movement };