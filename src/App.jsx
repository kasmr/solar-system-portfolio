import { useEffect, useState } from 'react';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spaceJPG from './assets/space.jpg';
import marsJPG from './assets/mars.jpg';
import earthJPG from './assets/earth.jpg';
import moonJPG from './assets/moon.jpg';
import sunJPG from './assets/sun.jpg';
import mercuryJPG from './assets/mercury.jpeg';
import project1JPG from './assets/project1.jpeg';
import project2JPG from './assets/project2.jpeg';
import project3JPG from './assets/project3.jpeg';
import { FaReact, FaCss3, FaGitAlt, FaFilePdf } from 'react-icons/fa';
import { MdMail, MdLocalPhone } from 'react-icons/md';
import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiBootstrap,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';

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

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function useCurrentWidth() {
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
      let timeoutId = null;

      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };

      window.addEventListener('resize', resizeListener);

      return () => {
        // remove resize listener
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

  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  const ambientLight = new THREE.AmbientLight(0xffffff);

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

  const marsTexture = new THREE.TextureLoader().load(marsJPG);

  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
      map: marsTexture,
    })
  );

  mars.position.z = 30;
  mars.position.setX(-5);

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

  sun.position.z = 60;
  sun.position.setX(-10);

  const mercuryTexture = new THREE.TextureLoader().load(mercuryJPG);

  const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
      map: mercuryTexture,
    })
  );

  mercury.position.z = 45;
  mercury.position.setX(-10);

  scene.add(mars, mercury, sun, moon, earth, torus, ambientLight);

  function moveCamera() {
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
  }

  document.body.onscroll = moveCamera;

  return (
    <div className='App'>
      <main>
        <header>
          <h1>Hi, I'm Oleg Krasnorutskiy</h1>

          <blockquote id='span'>
            <p>Front End </p>
            <p> Developer</p>
          </blockquote>

          <p>Welcome to my portfolio! 🚀 </p>
        </header>

        <section className='about'>
          <h2>About me</h2>
          <p>
            I'm versatile Front-End Developer with experience of implementing
            complex web apps, specializing in SPA development utilizing
            Javascript ecosystem. I like challenges and difficult tasks and
            working with a team of like-minded people.
          </p>
        </section>

        <section className='light'>
          <h2>My key skills</h2>
          <ul>
            <li>
              JavaScript
              <SiJavascript color='yellow' size='3rem' />
            </li>
            <li>
              React <FaReact color='#03a9f4' size='3rem' />
            </li>
            <li>
              Redux <SiRedux color='#7303f4' size='3rem' />
            </li>
            <li>
              TypeScript <SiTypescript color='#03a9f4' size='3rem' />
            </li>
            <li>
              HTML <SiHtml5 color='ffa805' size='3rem' />
            </li>
            <li>
              CSS <FaCss3 color='#03a9f4' size='3rem' />
            </li>
            <li>
              Sass <SiSass color='#FF3396' size='3rem' />
            </li>
            <li>
              Bootstrap <SiBootstrap color='#7303f4' size='3rem' />
            </li>
            <li>
              Git <FaGitAlt color='ffa805' size='3rem' />
            </li>
            <li>
              GitHub <SiGithub size='3rem' />
            </li>
          </ul>
        </section>

        <blockquote id='quote'>
          <p>
            “Expect the best, plan for the worst, and prepare to be surprised.”
          </p>
        </blockquote>

        <section className='project'>
          <h2>Projects</h2>

          <h3>Covid-19 tracker</h3>
          <p>
            Developes with React, hooks, contextAPI, charts.js and material-UI.
            The app to track amount of people infected with covid. It can show
            information worldwide or by each country. Desktop and mobile layouts
            are available in dark and light mode.
          </p>
          <img src={project1JPG} alt='project1' />
          <div className='a-links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://covid19-chart.web.app/'
            >
              Live demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/kasmr/coronavirus-chart'
            >
              GitHub
            </a>
          </div>
        </section>
        <section className='project'>
          <h3>Movie search app</h3>
          <p>
            Developed using React, hooks, context API, MVC pattern, Scss,
            bootstrap and react-router. The app for searching movies in two
            different languages provides, movie information such as, video
            trailer, screenshots, user's reviews, similar movies and the cast
            with ability to get info and filmography of a certain cast member.
          </p>
          <img src={project2JPG} alt='project2' />
          <div className='a-links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://kinofanat-e674f.web.app/'
            >
              Live demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/kasmr/kinofanat-react-app'
            >
              GitHub
            </a>
          </div>
        </section>
        <section className='project'>
          <h3>Netflix clone</h3>
          <p>
            Developed using plain html, scss, and Javascript. Clone of netflix
            landing page.
          </p>
          <img src={project3JPG} alt='project3' />
          <div className='a-links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://my-netflix-clone.herokuapp.com/#'
            >
              Live demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/kasmr/100-days-of-kasmrs-coding/tree/master/Java-Script-Projects/NetflixLandingPage'
            >
              GitHub
            </a>
          </div>
        </section>
        <blockquote id='contact'>
          <p>The ways you can contact me</p>
        </blockquote>
        <div className='footer'>
          <a href='mailto:alikkras@gmail.com'>
            <MdMail size='4rem' />
          </a>
          <a href='tel:+79002892643'>
            <MdLocalPhone size='4rem' />
          </a>
          <a href='https://github.com/kasmr'>
            <SiGithub size='4rem' />
          </a>
          <a href='https://www.linkedin.com/in/alik-krasnorutskiy-9348ba197/'>
            <SiLinkedin size='4rem' />
          </a>
          <a href='https://drive.google.com/file/d/1w0YSlcwksKK5Ru6GypQ0-ZzPK2zpzDRS/view?usp=sharing'>
            <FaFilePdf size='4rem' />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
