import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigate = useNavigate()
    const { img, name, category, price } = service;
    return (
        <div className='service'>
            <img height={250} width={345} src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>{category}</p>
            <p>Price:${price}</p>
            <div>
                <button className='service-btn' onClick={() => navigate('/checkout')} >Book Now</button>
            </div>
        </div>
    );
};

export default Service;