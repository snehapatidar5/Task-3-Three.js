import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const House = () => {
    useEffect(() => {
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera.position.set(0, 0, 8);

        // HDRI lighting
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
        });

        // Loading 3D model 
        const loader = new GLTFLoader();
        loader.load('./src/assets/tech.glb', (gltf) => {
            gltf.scene.position.set(0, -1, 0); // Adjusted position for the box
             gltf.scene.scale.set(2,2,2)
            scene.add(gltf.scene);
        });
//**********************************************************************************************************************************//
        
        // Responsiveness
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Mouse controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // for smooth stop

        // Create clock for better rotation 
        const clock = new THREE.Clock();

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // required if controls.enableDamping or controls.autoRotate are set to true
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return null; // This component doesn't render anything to the DOM
};

export default House;
