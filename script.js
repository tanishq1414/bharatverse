// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Transparent background

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Load a 3D model (e.g., a rocket)
const loader = new THREE.GLTFLoader();
let rocket;

loader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/models/gltf/rocket.glb', (gltf) => {
  rocket = gltf.scene;
  rocket.scale.set(0.5, 0.5, 0.5); // Scale down the rocket
  rocket.position.set(0, -2, -5); // Position the rocket
  scene.add(rocket);
});

// Add stars in the background
const starGeometry = new THREE.BufferGeometry();
const starVertices = [];
for (let i = 0; i < 1000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the rocket
  if (rocket) {
    rocket.rotation.y += 0.01;
  }

  // Move stars
  stars.rotation.x += 0.0005;
  stars.rotation.y += 0.0005;

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});