import React, { cloneElement } from 'react';

import { Blockquote } from './Blockquote';


const Contacts = () => {

    const contacts = [
        {
            link: 'mailto:alikkras@gmail.com',
            icon: <i className="fas fa-envelope"/>,
            text: 'Mail',
        },
        {
            link: 'https://drive.google.com/file/d/1xsvJ8BCSQlHnlXpBSZPQvBkk9W7lhjmC/view?usp=sharing',
            icon: <i className="fab fa-telegram-plane"/>,
            text: 'Telegram',
        },
        {
            link: 'https://www.linkedin.com/in/oleg-krasnorutskiy/',
            icon: <i className="fab fa-linkedin"/>,
            text: 'LinkedIn',
        },
        {
            link: 'https://github.com/kasmr',
            icon: <i className="fa fa-github"/>,
            text: 'Github',
        },
        {
            link: 'https://drive.google.com/file/d/1xsvJ8BCSQlHnlXpBSZPQvBkk9W7lhjmC/view?usp=sharing',
            icon: <i className="fas fa-file-pdf"/>,
            text: 'Resume',
        },
    ];

    return (
        <>
            <Blockquote id="contact" text="The ways you can contact me"/>

            <div className="contacts">
                {contacts.map(({ link, icon, text }) => (
                    <div key={link}>
                        <a href={link} rel="noreferrer" target="_blank">
                            {cloneElement(icon, { className: `${icon.props.className} fa-4x animate-on-hover` })}
                        </a>

                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </>
    );
};


export { Contacts };