import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { img, name, category, price, duration } = service;
    return (
        <div className='service'>
            <img height={150} width={250} src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>{category}</p>
            <p>${price}</p>
            <p>{duration}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;