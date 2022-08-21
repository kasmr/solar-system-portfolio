import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
    SiApollographql,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMobx,
    SiReact,
    SiRedux,
    SiSass,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import { FaCss3, FaGitAlt } from 'react-icons/fa';

import ReactQuery from '../assets/react-query.svg';


const Skills = () => {

    const size = '4rem';

    const skills = [
        {
            text: 'JavaScript',
            icon: <SiJavascript/>,
            color: '#ffff00',
        },
        {
            text: 'React ',
            icon: <SiReact/>,
            color: '#03a9f4',
        },
        {
            text: 'TypeScript',
            icon: <SiTypescript/>,
            color: '#03a9f4',
        },
        {
            text: 'Mobx',
            icon: <SiMobx/>,
            color: 'ffa805',
        },
        {
            text: 'Redux',
            icon: <SiRedux/>,
            color: '#7303f4',
        },
        {
            text: 'GraphQl',
            icon: <SiGraphql/>,
            color: '#ff3396',
        },
        {
            text: 'Apollo',
            icon: <SiApollographql/>,
        },
        {
            text: 'React Query',
            icon: <img alt="react-query" width={64} height={64} src={ReactQuery}/>,
        },
        {
            text: 'CSS',
            icon: <FaCss3/>,
            color: '#03a9f4',
        },
        {
            text: 'Sass',
            icon: <SiSass/>,
            color: '#ff3396',
        },
        {
            text: 'Tailwind CSS',
            icon: <SiTailwindcss/>,
            color: '#03a9f4',
        },
        {
            text: 'Styled-components',
            icon: <SiStyledcomponents/>,
            color: '#deb887',
        },
        {
            text: 'HTML',
            icon: <SiHtml5/>,
            color: 'ffa805',
        },
        {
            text: 'Git',
            icon: <FaGitAlt/>,
            color: 'ffa805',
        },
    ];

    const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation();

    const variants = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        inView && animation.start('visible');
    }, [ inView, animation ]);

    return (
        <section ref={ref} className="skills">
            <motion.h2 initial="hidden" variants={variants} animate={animation}>
                My key skills
            </motion.h2>
            <motion.ul initial="hidden" variants={variants} animate={animation}>
                {skills.map(({ text, icon, color }) => (
                    <li key={text}>
                        {text}
                        {React.isValidElement(icon) && React.cloneElement(icon, { size, color })}
                    </li>
                ))}
            </motion.ul>
        </section>
    );
};


export { Skills };