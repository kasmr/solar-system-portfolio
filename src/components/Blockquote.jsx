import React from 'react';


const Blockquote = ({ id, text }) => {
    return (
        <blockquote id={id}>
            <p>{text}</p>
        </blockquote>
    );
};


export { Blockquote };