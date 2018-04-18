'use strict';
import React from 'react';

const Image = (props) => {
    return ( 
        <img src={props.src} className={props.class} alt={props.alt} /> 
    ); 
};

const ClickableListIcon = (props) => {
    return ( 
        <img src={props.src} className={props.class} alt={props.alt} /> 
    );    
};

module.exports = {
    Image: Image,
    clickableListIcon: ClickableListIcon
};