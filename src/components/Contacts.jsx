import React, { cloneElement, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { Blockquote } from './Blockquote';


const Contacts = () => {

    const contacts = [
        {
            link: 'mailto:alikkras@gmail.com',
            icon: <i className="fas fa-envelope"/>,
            text: 'Mail',
        },
        {
            link: 'https://t.me/kasmrxaxaxa',
            icon: <i className="fab fa-telegram-plane"/>,
            text: 'Telegram',
        },
        {
            link: 'https://www.linkedin.com/in/alik-krasnorutskiy/',
            icon: <i className="fab fa-linkedin"/>,
            text: 'LinkedIn',
        },
        {
            link: 'https://github.com/kasmr',
            icon: <i className="fa fa-github"/>,
            text: 'Github',
        },
        {
            link: 'https://drive.google.com/file/d/1WUL3G75v59THTATl0lE9-FVTfVJZfE4-/view?usp=sharing',
            icon: <i className="fas fa-file-pdf"/>,
            text: 'Resume',
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
        <>
            <Blockquote id="contact" text="The ways you can contact me"/>

            <motion.div ref={ref} initial="hidden" variants={variants} animate={animation} className="contacts">
                {contacts.map(({ link, icon, text }) => (
                    <div key={link}>
                        <a href={link} rel="noreferrer" target="_blank">
                            {cloneElement(icon, { className: `${icon.props.className} fa-4x animate-on-hover` })}
                        </a>

                        <p>{text}</p>
                    </div>
                ))}
            </motion.div>
        </>
    );
};


export { Contacts };