import React from 'react';

import { MdLocalPhone, MdMail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';


const Contacts = () => {

    const contacts = [
        {
            link: 'mailto:alikkras@gmail.com',
            icon: <MdMail size="4rem"/>,
        },
        {
            link: 'tel:+79002892643',
            icon: <MdLocalPhone size="4rem"/>,
        },
        {
            link: 'https://github.com/kasmr',
            icon: <SiGithub size="4rem"/>,
        },
        {
            link: 'https://www.linkedin.com/in/alik-krasnorutskiy-9348ba197/',
            icon: <SiLinkedin size="4rem"/>,
        },
        {
            link: 'https://drive.google.com/file/d/1vuVuctAAQmw06J6zBAFedhrTk1M-e9Xx/view?usp=sharing',
            icon: <FaFilePdf size="4rem"/>,
        },

    ];

    return (
        <div className="contacts">
            {contacts.map(({ link, icon }) => (
                <a key={link} href={link} rel="noreferrer" target="_blank">
                    {icon}
                </a>
            ))}
        </div>
    );
};


export { Contacts };