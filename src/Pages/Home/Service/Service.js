import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, seller, img, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <p>Seller{seller}</p>
        </div>
    );
};

export default Service;