import React, { useEffect } from 'react';

import project1JPG from '../assets/project1.jpeg';
import project2JPG from '../assets/project2.jpeg';
import project3JPG from '../assets/project3.jpeg';
import project4JPG from '../assets/project4.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const Projects = () => {

    const projects = [
        {
            title: 'MacOS like Notes app',
            description: 'Single page application was built with React, Mobx, Antd UI, react-markdown and MDE-editor. ' +
                'You can to add, delete, edit and search for notes.',
            image: project3JPG,
            demoLink: 'https://notes-omega-jade.vercel.app',
            githubLink: 'https://github.com/kasmr/notes',
        },
        {
            title: 'Movie search app',
            description: 'Single page application dseveloped using React, hooks, context API,\n' +
                '            MVC pattern, Scss, bootstrap and react-router. The app for searching\n' +
                '            movies in two different languages provides, movie information such\n' +
                '            as, video trailer, screenshots, user\'s reviews, similar movies and\n' +
                '            the cast with ability to get info and filmography of a certain cast\n' +
                '            member.',
            image: project2JPG,
            demoLink: 'https://kinofanat-e674f.web.app/',
            githubLink: 'https://github.com/kasmr/kinofanat-react-app',
        },
        {
            title: 'Covid-19 tracker',
            description: 'Developed with React, hooks, contextAPI, charts.js and material-UI.\n' +
                '            The app to track amount of people infected with covid. It can show\n' +
                '            information worldwide or by each country. Desktop and mobile layouts\n' +
                '            are available in dark and light mode.',
            image: project1JPG,
            demoLink: 'https://coronavirus-chart.vercel.app',
            githubLink: 'https://github.com/kasmr/coronavirus-chart',
        },
        {
            title: 'Netflix clone',
            description: 'Developed using plain html, scss, and Javascript. Clone of netflix landing page.',
            image: project4JPG,
            demoLink: 'https://my-netflix-clone.herokuapp.com/#',
            githubLink: 'https://github.com/kasmr/100-days-of-kasmrs-coding/tree/master/Java-Script-Projects/NetflixLandingPage',
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
            {projects.map(({ title, description, image, demoLink, githubLink }) => (
                <motion.div initial="hidden" variants={variants} animate={animation} key={demoLink}>
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                    <img src={image} alt={title}/>
                    <div className="a-links">
                        <a className="demo" target="_blank" rel="noopener noreferrer" href={demoLink}>
                            <span>L</span>
                            <span>i</span>
                            <span>v</span>
                            <span>e</span>
                            &nbsp;
                            <span>d</span>
                            <span>e</span>
                            <span>m</span>
                            <span>o</span>
                        </a>
                        <a className="github" target="_blank" rel="noopener noreferrer" href={githubLink}>
                            <span>G</span>
                            <span>i</span>
                            <span>t</span>
                            <span>H</span>
                            <span>u</span>
                            <span>b</span>
                        </a>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};


export { Projects };