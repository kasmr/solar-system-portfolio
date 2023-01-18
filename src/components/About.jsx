import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const About = () => {

    const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation();

    const variants = {
        visible: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        inView && animation.start('visible');
    }, [ inView, animation ]);

    return (
        <section ref={ref} className="about">
            <motion.h2 initial="hidden" variants={variants} animate={animation}>
                About me
            </motion.h2>
            <motion.h4 initial="hidden" variants={variants} animate={animation}>
                I convert good mood 😃 and coffee ☕ into beautiful code.
            </motion.h4>
            <motion.h4 initial="hidden" variants={variants} animate={animation}>
                I'm a frontend developer with 3+ years of experience in implementing complex web apps, specializing in
                SPA functional and performant user interfaces. I like to solve difficult problems and work in a team of
                like-minded people. I always focus on high code quality providing modern and best solutions based on the
                best practices. I strive to be up to date with the latest technologies and enjoy every bit of learning
                them.
            </motion.h4>
        </section>
    );
};


export { About };