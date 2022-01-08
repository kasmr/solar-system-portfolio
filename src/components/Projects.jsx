import React from 'react';

import project1JPG from '../assets/project1.jpeg';
import project2JPG from '../assets/project2.jpeg';
import project3JPG from '../assets/project4.jpeg';
import project4JPG from '../assets/project4.jpeg';


const Projects = () => {

    const projects = [
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
            title: 'MacOS like Notes app',
            description: 'Notes with ability to add, delete, update and search for notes.\n' +
                '            The app was built with React - Mobx, Antd UI, react-markdown and MDE-editor.',
            image: project3JPG,
            demoLink: 'https://notes-omega-jade.vercel.app',
            githubLink: 'https://github.com/kasmr/notes',
        },
        {
            title: 'Netflix clone',
            description: 'Developed using plain html, scss, and Javascript. Clone of netflix landing page.',
            image: project4JPG,
            demoLink: 'https://my-netflix-clone.herokuapp.com/#',
            githubLink: 'https://github.com/kasmr/100-days-of-kasmrs-coding/tree/master/Java-Script-Projects/NetflixLandingPage',
        },

    ];

    return (
        <section className="project">
            <h2>Projects</h2>
            {projects.map(({ title, description, image, demoLink, githubLink }) => (
                <>
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                    <img src={image} alt={title}/>
                    <div className="a-links">
                        <a target="_blank" rel="noopener noreferrer" href={demoLink}>
                            Live demo
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={githubLink}>
                            GitHub
                        </a>
                    </div>
                </>
            ))}
        </section>
    );
};


export { Projects };