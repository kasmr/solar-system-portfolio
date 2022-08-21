import React from 'react';


const Blockquote = ({ id, text, ...rest }) => {
    return (
        <blockquote id={id} {...rest}>
            <p>{text}</p>
        </blockquote>
    );
};


export { Blockquote };