import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { img, name, category, price, duration } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>Package Name:{name}</h1>
            <p>{category}</p>
            <p>${price}</p>
            <p>{duration}</p>
        </div>
    );
};

export default Service;