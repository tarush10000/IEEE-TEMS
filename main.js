import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js'
import { PointLightHelper } from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
camera.position.setZ(5000);

//transparent bg and video
renderer.setClearColor( 0x000000, 0 ); // the default
document.getElementById("bgvideo").playbackRate = 0.5;


renderer.render(scene, camera);
//IEEE TEMS logo ka dabba
const geometry = new THREE.BoxGeometry( 25, 11, 0 );
const texture = new THREE.TextureLoader().load('images/logo.png'); 
const material = new THREE.MeshStandardMaterial( { map: texture,roughness:0.5, metalness:0.5, transparent: true }); 
const IEEElogo = new THREE.Mesh( geometry, material ); 
IEEElogo.castShadow = true;
IEEElogo.receiveShadow = true;
scene.add( IEEElogo );


//Photos
const phgeo = new THREE.BoxGeometry( 25, 33.33, 0 );
const phtex = new THREE.TextureLoader().load('images/2022-23.png'); 
phtex.encoding = THREE.sRGBEncoding;
const phmat = new THREE.MeshStandardMaterial( { map: phtex,color: 0xffffff,roughness:1, metalness:0.9, transparent: true}); 
const ph = new THREE.Mesh( phgeo, phmat ); 
ph.position.set(0, 0, 400);

const ph2geo = new THREE.BoxGeometry( 25, 33.33, 0 );
const ph2tex = new THREE.TextureLoader().load('images/2021-22.png'); 
ph2tex.encoding = THREE.sRGBEncoding;
const ph2mat = new THREE.MeshStandardMaterial( { map: ph2tex,color: 0xffffff,roughness:1, metalness:0.9, transparent: true}); 
const ph2 = new THREE.Mesh( ph2geo, ph2mat ); 
ph2.position.set(0, 0, 700);


//ambient light jo abhi bahut kuch kar rahi hai
const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

//helpers
// const pointLightHelper = new PointLightHelper(pointLight);
// scene.add(pointLightHelper);
// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

//camera rotation with mouse
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableRotate = false;
controls.enableDamping = true;
controls.dampingFactor = 0.5;

function animateCameraPosition() {
  const initialPosition = {z : 5000 };
  const targetPosition = {z : 30};
  const duration = 2000; // Animation duration in milliseconds

  new TWEEN.Tween(initialPosition)
    .to(targetPosition, duration)
    .easing(TWEEN.Easing.Quadratic.InOut) // Use bounce effect
    .onUpdate(() => {
      camera.position.setZ(initialPosition.z);
    })
    .onComplete(() => {
      setTimeout(() => {
        scene.add(ph);
        scene.add(ph2);
      }, 1000);
    })
    .start();
}

// Call the camera position animation on startup
animateCameraPosition();
//random stars in background
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.1, 24, 24);
//   const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
//   const star = new THREE.Mesh( geometry, material );
//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x, y, z);
//   scene.add(star);
// }
// Array(50).fill().forEach(addStar);




//rotator elements
const rotator = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar = new THREE.Mesh( rotator, rotatormaterial );
rotatorstar.position.set(0, 0, 0);
scene.add(rotatorstar);

const rotator2 = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar2 = new THREE.Mesh( rotator2, rotatormaterial2 );
rotatorstar2.position.set(0, 0, 0);
scene.add(rotatorstar2);

const rotator3 = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial3 = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar3 = new THREE.Mesh( rotator3, rotatormaterial3 );
rotatorstar3.position.set(0, 0, 0);
scene.add(rotatorstar3);

//animation controls
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  rotatorstar.rotation.z += 0.005;
  rotatorstar.rotation.x += 0.001;

  rotatorstar2.rotation.z -= 0.005;
  rotatorstar2.rotation.x -= 0.001;
  
  rotatorstar3.rotation.z -= 0.005;
  rotatorstar3.rotation.x += 0.001;
}
animate();

//balls
const rotatingSpheres = [];
function rotatingelements(){
  
  const webloader = new THREE.TextureLoader();
  const webgeometry = new THREE.SphereGeometry(0.1,24,24);
  const webmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const web = new THREE.Mesh(webgeometry, webmaterial);
  web.position.x = 10;
  web.position.y = -1;
  rotatorstar.add(web);

  const machineloader = new THREE.TextureLoader();
  const machinegeometry = new THREE.SphereGeometry(0.1,24,24);
  const machinematerial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const machine = new THREE.Mesh(machinegeometry, machinematerial);
  machine.position.x = 8;
  machine.position.y = -5;
  rotatorstar3.add(machine);

  const iotloader = new THREE.TextureLoader();
  const iotgeometry = new THREE.SphereGeometry(0.1,24,24);
  const iotmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const iot = new THREE.Mesh(iotgeometry, iotmaterial);
  iot.position.x = 6;
  iot.position.y = -9;
  rotatorstar2.add(iot);

  const devloader = new THREE.TextureLoader();
  const devgeometry = new THREE.SphereGeometry(0.1,24,24);
  const devmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const dev = new THREE.Mesh(devgeometry, devmaterial);
  dev.position.x = 4;
  dev.position.y = -13;
  rotatorstar.add(dev);

  const blogloader = new THREE.TextureLoader();
  const bloggeometry = new THREE.SphereGeometry(0.1,24,24);
  const blogmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const blog = new THREE.Mesh(bloggeometry, blogmaterial);
  blog.position.x = 2;
  blog.position.y = -17;
  rotatorstar2.add(blog);

  const designloader = new THREE.TextureLoader();
  const designgeometry = new THREE.SphereGeometry(0.1,24,24);
  const designmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const design = new THREE.Mesh(designgeometry, designmaterial);
  design.position.x = 0;
  design.position.y = -16;
  rotatorstar3.add(design);

  rotatingSpheres.push(web, machine, iot, dev, blog, design);
  return rotatingSpheres;
}

const rotatingSpheresArray = rotatingelements();

// //Animation for rotating balls 
// const container = document.getElementById("startup");
// container.addEventListener("mousemove", onMouseMove);

// function onMouseMove(event) {
//   // Calculate mouse position relative to the container
//   const containerBounds = container.getBoundingClientRect();
//   const mouseX = (event.clientX - containerBounds.left) / containerBounds.width * 2 - 1;
//   const mouseY = -((event.clientY - containerBounds.top) / containerBounds.height) * 2 + 1;

//   // Create a raycaster and cast a ray from the camera
//   const raycaster = new THREE.Raycaster();
//   const mouseVector = new THREE.Vector2(mouseX, mouseY);
//   raycaster.setFromCamera(mouseVector, camera);

//   // Update the light position with mouse coordinates
//   pointLight.position.x = mouseX;
//   pointLight.position.y = mouseY;
//   pointLight.position.z = 10;

//   // Check for intersections with the cuboid
//   const intersects = raycaster.intersectObject(IEEElogo);

//   console.log(intersects.length);

//   // Scale spheres based on intersection
//   rotatingSpheresArray.forEach((sphere) => {
//     if (intersects.length == 1) {
//       new TWEEN.Tween(sphere.scale)
//         .to({ x: 10, y: 10, z: 10 }, 100)
//         .easing(TWEEN.Easing.Quadratic.Out)
//         .start();
//     } else {
//       new TWEEN.Tween(sphere.scale)
//         .to({ x: 0, y: 0, z: 0 }, 100) 
//         .easing(TWEEN.Easing.Quadratic.Out) 
//         .start();
//     }
//   });
// }

function animateTween() {
  requestAnimationFrame(animateTween);
  TWEEN.update();
  renderer.render(scene, camera);
}

animateTween();