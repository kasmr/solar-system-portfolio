import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const Header = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const animation = useAnimation();

    const h1 = {
        visible: { opacity: 1, transition: { duration: 1, } },
        hidden: { opacity: 0 },
    };

    const blockquote = {
        visible: { opacity: 1, transition: { duration: 2, delay: 1 } },
        hidden: { opacity: 0 },
    };

    const p = {
        visible: { opacity: 1, transition: { duration: 2, delay: 1.5 } },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        inView && animation.start('visible');
    }, [ inView, animation ]);

    return (
        <header ref={ref}>
            <motion.h1 initial="hidden" variants={h1} animate={animation} className="animate">
                Hi, I'm Alik Krasnorutskiy
            </motion.h1>

            <motion.blockquote initial="hidden" variants={blockquote} animate={animation}>
                <p>Frontend developer</p>
            </motion.blockquote>

            <motion.p initial="hidden" variants={p} animate={animation}>
                Welcome to my portfolio! 🚀
            </motion.p>
        </header>
    );
};


export { Header };