import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'
const Service = ({ service }) => {
    const { img, name, category, price, duration } = service;
    return (
        <div className='service'>
            <img height={250} width={450} src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>{category}</p>
            <p>Price:${price}</p>
            <Button className='btn' variant="outline-danger">Book Now</Button>{' '}
        </div>
    );
};

export default Service;