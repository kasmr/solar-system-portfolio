import React from 'react';

import { MdLocalPhone, MdMail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';


const Contacts = () => {
    return (
        <div className="contacts">
            <a href="mailto:alikkras@gmail.com">
                <MdMail size="4rem"/>
            </a>
            <a href="tel:+79002892643">
                <MdLocalPhone size="4rem"/>
            </a>
            <a href="https://github.com/kasmr">
                <SiGithub size="4rem"/>
            </a>
            <a href="https://www.linkedin.com/in/alik-krasnorutskiy-9348ba197/">
                <SiLinkedin size="4rem"/>
            </a>
            <a href="https://drive.google.com/file/d/1OIpkp9v21woAhmHNadacfvHOt_R7_WHa/view?usp=sharing">
                <FaFilePdf size="4rem"/>
            </a>
        </div>
    );
};


export { Contacts };