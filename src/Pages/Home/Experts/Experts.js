import React from 'react';
import expert1 from '../../../images/experts/expert1.jpg';
import expert2 from '../../../images/experts/expert2.png';
import expert3 from '../../../images/experts/expert3.png';
import expert4 from '../../../images/experts/expert4.jpg';
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: 'will smith', img: expert1 },
    { id: 2, name: 'ill mith', img: expert2 },
    { id: 3, name: 'wll sith', img: expert3 },
    { id: 4, name: 'wil smit', img: expert4 },

]
const Experts = () => {
    return (
        <div className='container' >
            <h2 className='text-primary text-center'>Our experts</h2>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}>

                </Expert>)
            }

        </div>
    );
};

export default Experts;