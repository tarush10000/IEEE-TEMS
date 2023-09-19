import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


//IEEE TEMS logo ka dabba
const geometry = new THREE.BoxGeometry( 30, 11, 0 );
const texture = new THREE.TextureLoader().load('images/logo2.png'); 
const material = new THREE.MeshStandardMaterial( { map: texture }); 
const IEEElogo = new THREE.Mesh( geometry, material ); 
scene.add( IEEElogo );


//ambient light jo abhi bahut kuch kar rahi hai
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


//point light jo abhi kuch nahi kar rahi 
const pointLight = new THREE.PointLight(0xffffff, 20, 300);
pointLight.position.set(0, 0, 2);
scene.add(pointLight);


//helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(GridHelper);

//camera rotation with mouse
const controls = new OrbitControls(camera, renderer.domElement);


//random stars in background
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
  const star = new THREE.Mesh( geometry, material );
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(50).fill().forEach(addStar);




//rotator elements
const rotator = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar = new THREE.Mesh( rotator, rotatormaterial );
rotatorstar.position.set(0, 0, 0);
scene.add(rotatorstar);

const rotator2 = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial2 = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar2 = new THREE.Mesh( rotator, rotatormaterial );
rotatorstar2.position.set(0, 0, 0);
scene.add(rotatorstar2);

const rotator3 = new THREE.SphereGeometry(0, 24, 24);
const rotatormaterial3 = new THREE.MeshStandardMaterial( { color: 0xffffff });
const rotatorstar3 = new THREE.Mesh( rotator, rotatormaterial );
rotatorstar3.position.set(0, 0, 0);
scene.add(rotatorstar3);


//domains
function rotatingelements(){
  const webloader = new THREE.TextureLoader();
  const webtexture = webloader.load('images/coding.png');
  const webgeometry = new THREE.SphereGeometry(1, 24, 24);
  const webmaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
  const web = new THREE.Mesh(webgeometry, webmaterial);
  web.position.x = 10;
  rotatorstar2.add(web);
  
  const machineloader = new THREE.TextureLoader();
  const machinetexture = machineloader.load('images/coding.png');
  const machinegeometry = new THREE.SphereGeometry(1, 24, 24);
  const machinematerial = new THREE.MeshBasicMaterial({color: 0xf111ff});
  const machine = new THREE.Mesh(machinegeometry, machinematerial);
  machine.position.x = 8;
  machine.position.y = -5;
  rotatorstar3.add(machine);

  const iotloader = new THREE.TextureLoader();
  const iottexture = iotloader.load('images/coding.png');
  const iotgeometry = new THREE.SphereGeometry(1, 24, 24);
  const iotmaterial = new THREE.MeshBasicMaterial({color: 0xf1113f});
  const iot = new THREE.Mesh(iotgeometry, iotmaterial);
  iot.position.x = 6;
  iot.position.y = -9;
  rotatorstar2.add(iot);

  const devloader = new THREE.TextureLoader();
  const devtexture = devloader.load('images/coding.png');
  const devgeometry = new THREE.SphereGeometry(1, 24, 24);
  const devmaterial = new THREE.MeshBasicMaterial({color: 0x731139});
  const dev = new THREE.Mesh(devgeometry, devmaterial);
  dev.position.x = 4;
  dev.position.y = -13;
  rotatorstar.add(dev);

  const blogloader = new THREE.TextureLoader();
  const blogtexture = blogloader.load('images/coding.png');
  const bloggeometry = new THREE.SphereGeometry(1, 24, 24);
  const blogmaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
  const blog = new THREE.Mesh(bloggeometry, blogmaterial);
  blog.position.x = 2;
  blog.position.y = -17;
  rotatorstar2.add(blog);

  const designloader = new THREE.TextureLoader();
  const designtexture = designloader.load('images/coding.png');
  const designgeometry = new THREE.SphereGeometry(1, 24, 24);
  const designmaterial = new THREE.MeshBasicMaterial({color: 0x2eeeef});
  const design = new THREE.Mesh(designgeometry, designmaterial);
  design.position.x = 0;
  design.position.y = -16;
  rotatorstar3.add(design);
}


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
rotatingelements();