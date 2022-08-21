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
                I'm versatile Front-End Developer with experience of implementing
                complex web apps, specializing in SPA development utilizing
                Javascript ecosystem. I like challenges and difficult tasks and
                working with a team of like-minded people.
            </motion.h4>
        </section>
    );
};


export { About };