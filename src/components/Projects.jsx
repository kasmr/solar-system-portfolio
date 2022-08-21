import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import project0PNG from '../assets/project0.png';
import project1JPG from '../assets/project1.jpeg';
import project2JPG from '../assets/project2.jpeg';
import project3JPG from '../assets/project3.jpeg';


const Projects = () => {

    const projects = [
        {
            title: 'Exode — Educational social network',
            description: `Interesting preparation for the Unified State Examination and assistance with admission to
                the university. Playing tournaments with friends while learning. Chat and video-calls to meet new people.
                Preparation for examinations via courses and video-courses directly with a teacher`,
            technologies: `TypeScript · React.js · MobX · GraphQL · Apollo · Websockets · Formik · Webrtc · Agora · Loadash ·
            Joyride · SCSS · Tailwind CSS · styled-components · MaterialUi`,
            image: project0PNG,
            demoLink: 'https://exode.ru',
            githubLink: 'private',
        },
        {
            title: 'Movie search app',
            description: 'Single page application developed using' +
                '            MVC pattern, Scss, bootstrap and react-router. The app for searching\n' +
                '            movies in two different languages. The app provides movie information such\n' +
                '            as, video trailer, screenshots, user\'s reviews and ratings, similar movies and\n' +
                '            the cast. With ability to get info and filmography of a certain actor or actress.',
            technologies: `JavaScript · React.js · ContextAPI · SCSS · Bootstrap · React-router`,
            image: project2JPG,
            demoLink: 'https://kinofanat-e674f.web.app/',
            githubLink: 'https://github.com/kasmr/kinofanat-react-app',
        },
        {
            title: 'MacOS like Notes app',
            description: `Single page application with functionality to add, delete, edit and search for notes 
            which is done by using markdown with all its features and ability to convert it to a plain html`,
            technologies: `TypeScript · React.js · MobX · Ant Design · MDE-editor · react-markdown`,
            image: project3JPG,
            demoLink: 'https://notes-omega-jade.vercel.app',
            githubLink: 'https://github.com/kasmr/notes',
        },
        {
            title: 'Covid-19 tracker',
            description: 'The app to track amount of people infected with covid. The information can be displayed\n' +
                'by worldwide results or by each country implemented by charts visualisation. Desktop and mobile layouts\n' +
                'are available in dark and light mode.',
            technologies: `JavaScript · React.js · ContextAPI · MaterialUI · react-chartjs-2 · react-countup`,
            image: project1JPG,
            demoLink: 'https://coronavirus-chart.vercel.app',
            githubLink: 'https://github.com/kasmr/coronavirus-chart',
        },
    ];

    const { ref, inView } = useInView();
    const animation = useAnimation();

    const variants = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        inView && animation.start('visible');
    }, [ inView, animation ]);

    return (
        <section ref={ref} className="project">
            <motion.h2 initial="hidden" variants={variants} animate={animation}>Projects</motion.h2>
            {projects.map(({ title, description, image, demoLink, githubLink, technologies }) => (
                <motion.div initial="hidden" variants={variants} animate={animation} key={demoLink}>
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                    {technologies && <h4>{technologies}</h4>}
                    <img src={image} alt={title}/>
                    <div className="a-links">
                        <a className="demo" target="_blank" rel="noopener noreferrer" href={demoLink}>
                            <span>L</span>
                            <span>i</span>
                            <span>v</span>
                            <span>e</span>
                            <span>&nbsp;</span>
                            <span>d</span>
                            <span>e</span>
                            <span>m</span>
                            <span>o</span>
                        </a>
                        <a target="_blank"
                           href={githubLink}
                           rel="noopener noreferrer"
                           className={githubLink === 'private' ? 'disabled' : 'github'}>
                            <span>G</span>
                            <span>i</span>
                            <span>t</span>
                            <span>H</span>
                            <span>u</span>
                            <span>b</span>
                            {githubLink === 'private' && <span className="private">({githubLink})</span>}
                        </a>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};


export { Projects };