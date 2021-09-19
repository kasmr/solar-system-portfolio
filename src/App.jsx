import { useEffect } from 'react';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spaceJPG from './assets/space.jpg';
import profileJPG from './assets/profile.jpeg';
import marsJPG from './assets/mars.jpg';
import earthJPG from './assets/earth.jpg';
import moonJPG from './assets/moon.jpg';
import sunJPG from './assets/sun.jpg';

function App() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color: 0xcd0000,
    wireframe: true,
  });
  const torus = new THREE.Mesh(geometry, material);

  const controls = new OrbitControls(camera, renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  };

  // const pointLight = new THREE.PointLight(0xffffff);
  // pointLight.position.set(50, 50, 50);

  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(ambientLight);

  animate();

  function addStar() {
    const geometry = new THREE.SphereGeometry(0.15, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill().forEach(addStar);

  const backgroundTexture = new THREE.TextureLoader().load(spaceJPG);
  scene.background = backgroundTexture;

  // const profileTexture = new THREE.TextureLoader().load(profileJPG);

  // const profilePhoto = new THREE.Mesh(
  //   new THREE.BoxGeometry(3, 3, 3),
  //   new THREE.MeshBasicMaterial({ map: profileTexture })
  // );

  // scene.add(profilePhoto);

  const marsTexture = new THREE.TextureLoader().load(marsJPG);

  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
      map: marsTexture,
    })
  );

  mars.position.z = 30;
  mars.position.setX(-10);

  const earthTexture = new THREE.TextureLoader().load(earthJPG);

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: earthTexture,
    })
  );

  const moonTexture = new THREE.TextureLoader().load(moonJPG);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
    })
  );

  moon.position.z = 3;
  moon.position.setX(-5);

  const sunTexture = new THREE.TextureLoader().load(sunJPG);

  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshStandardMaterial({
      map: sunTexture,
    })
  );

  sun.position.z = 40;
  sun.position.setX(-15);

  scene.add(mars, sun, moon, earth, torus);

  return <div className='App'></div>;
}

export default App;
