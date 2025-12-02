import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.4; // ADJUST THIS: Higher = brighter scene (range: 0.5 - 3.0)
renderer.outputEncoding = THREE.sRGBEncoding;
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lighting - Balanced for Rough Materials
// ADJUST LIGHT INTENSITIES: Change the second parameter (number) to make lights brighter/dimmer

// Ambient light for overall brightness
const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // ADJUST: 0.5 - 2.0
scene.add(ambientLight);

// Hemisphere light for natural ambient lighting
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8); // ADJUST: 0.3 - 1.5
hemisphereLight.position.set(0, 20, 0);
scene.add(hemisphereLight);

// Main directional lights from key angles
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.3); // ADJUST: 0.5 - 3.0
directionalLight1.position.set(5, 5, 5);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8); // ADJUST: 0.3 - 2.0
directionalLight2.position.set(-5, 5, -5);
scene.add(directionalLight2);

// Front light for visibility
const frontLight = new THREE.DirectionalLight(0xffffff, 1.0); // ADJUST: 0.5 - 2.0
frontLight.position.set(0, 0, 10);
scene.add(frontLight);

// OrbitControls - Disabled for static rotation
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // Disable all mouse interactions

// Load the 3D model
const loader = new GLTFLoader();
let beerCan;

loader.load(
    'mayura.glb',
    function (gltf) {
        beerCan = gltf.scene;
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(beerCan);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Center the model
        beerCan.position.sub(center);
        
        // Scale to fit view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        beerCan.scale.setScalar(scale);
        
        scene.add(beerCan);
        console.log('Beer can model loaded successfully!');
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error occurred loading the model:', error);
    }
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the can slowly on z-axis
    if (beerCan) {
        beerCan.rotation.y -= 0.005;
    }
    
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

