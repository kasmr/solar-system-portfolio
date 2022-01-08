import React from 'react';
import {
    SiApollographql,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMobx,
    SiReact,
    SiRedux,
    SiSass,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import ReactQuery from '../assets/react-query.svg';
import { FaCss3, FaGitAlt } from 'react-icons/fa';


const Skills = () => {

    const size = '3rem';

    const skills = [
        {
            text: 'JavaScript',
            reactElement: <SiJavascript/>,
            color: '#ffff00',
        },
    ];

    return (
        <section className="skills">
            <h2>My key skills</h2>
            <ul>
                {skills.map(({ text, reactElement, color }) => (
                    <li>
                        {text}
                        {reactElement}
                    </li>
                ))}
                <li>
                    JavaScript
                    <SiJavascript color="yellow" size="3rem"/>
                </li>
                <li>
                    React <SiReact color="#03a9f4" size="3rem"/>
                </li>
                <li>
                    TypeScript <SiTypescript color="#03a9f4" size="3rem"/>
                </li>
                <li>
                    GraphQl <SiGraphql color="#ff3396" size="3rem"/>
                </li>
                <li>
                    Apollo <SiApollographql size="3rem"/>
                </li>
                <li>
                    React Query <img alt="react-query" width={48} height={48} src={ReactQuery}/>
                </li>
                <li>
                    Mobx <SiMobx color="ffa805" size="3rem"/>
                </li>
                <li>
                    Redux <SiRedux color="#7303f4" size="3rem"/>
                </li>
                <li>
                    HTML <SiHtml5 color="ffa805" size="3rem"/>
                </li>
                <li>
                    CSS <FaCss3 color="#03a9f4" size="3rem"/>
                </li>
                <li>
                    Sass <SiSass color="#ff3396" size="3rem"/>
                </li>
                <li>
                    Tailwind CSS <SiTailwindcss color="#03a9f4" size="3rem"/>
                </li>
                <li>
                    Git <FaGitAlt color="ffa805" size="3rem"/>
                </li>
                <li>
                    GitHub <SiGithub size="3rem"/>
                </li>
            </ul>
        </section>
    );
};


export { Skills };