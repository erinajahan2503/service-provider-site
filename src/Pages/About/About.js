import React from 'react';
import './About.css'
import image from '../../images/about/erina.png'
const About = () => {
    return (
        <div>
            <img height={350} src={image} alt="" />
            <p className='about-me'>
                I am Erina Jahan Inne.<br /><span>I am student in department of Zoology.<br />But I always liked Programming.So,I wanted to take programming as my future.<br /> I am committed to my goal and I am trying my best to reach my goal and do something good in Programming life.
                </span>
            </p>
        </div>
    );
};

export default About;