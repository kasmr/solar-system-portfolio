import { useEffect, useState } from 'react';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

import spaceJPG from './assets/space.jpg';
import marsJPG from './assets/mars.jpg';
import earthJPG from './assets/earth.jpg';
import moonJPG from './assets/moon.jpg';
import sunJPG from './assets/sun.jpg';
import mercuryJPG from './assets/mercury.jpeg';


const Three = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    );

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    const getWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    const useCurrentWidth = () => {
        let [ width, setWidth ] = useState(getWidth());

        useEffect(() => {
            let timeoutId = null;

            const resizeListener = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => setWidth(getWidth()), 150);
            };

            window.addEventListener('resize', resizeListener);

            return () => {
                window.removeEventListener('resize', resizeListener);
            };
        }, []);

        return width;
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(useCurrentWidth(), window.innerHeight);
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
    }

    const ambientLight = new THREE.AmbientLight(0xffffff);

    animate();

    const addStar = () => {
        const geometry = new THREE.SphereGeometry(0.15, 24, 24);
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const star = new THREE.Mesh(geometry, material);

        const [ x, y, z ] = Array(3)
            .fill(0)
            .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(200).fill(0).forEach(addStar);

    scene.background = new THREE.TextureLoader().load(spaceJPG);

    const marsTexture = new THREE.TextureLoader().load(marsJPG);

    const mars = new THREE.Mesh(
        new THREE.SphereGeometry(2, 32, 32),
        new THREE.MeshStandardMaterial({
            map: marsTexture,
        }),
    );

    mars.position.z = 30;
    mars.position.setX(-5);

    const earthTexture = new THREE.TextureLoader().load(earthJPG);

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({
            map: earthTexture,
        }),
    );

    const moonTexture = new THREE.TextureLoader().load(moonJPG);

    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({
            map: moonTexture,
        }),
    );

    moon.position.z = 3;
    moon.position.setX(-5);

    const sunTexture = new THREE.TextureLoader().load(sunJPG);

    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(4, 32, 32),
        new THREE.MeshStandardMaterial({
            map: sunTexture,
        }),
    );

    sun.position.z = 60;
    sun.position.setX(-10);

    const mercuryTexture = new THREE.TextureLoader().load(mercuryJPG);

    const mercury = new THREE.Mesh(
        new THREE.SphereGeometry(2, 32, 32),
        new THREE.MeshStandardMaterial({
            map: mercuryTexture,
        }),
    );

    mercury.position.z = 45;
    mercury.position.setX(-10);

    scene.add(mars, mercury, sun, moon, earth, torus, ambientLight);

    document.body.onscroll = () => {
        const t = document.body.getBoundingClientRect().top;

        camera.position.z = t * -0.025;
        camera.position.x = t * -0.0001;
        camera.position.y = t * -0.0001;

        earth.rotation.y += 0.025;
        sun.rotation.y += 0.01;

        mars.rotation.z += 0.025;
        mars.rotation.x += 0.025;
        mars.rotation.y += 0.025;
        mercury.rotation.z += 0.025;
        mercury.rotation.x += 0.025;
        mercury.rotation.y += 0.025;
    };
};


export { Three };