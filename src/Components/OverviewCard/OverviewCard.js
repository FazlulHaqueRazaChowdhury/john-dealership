import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import './OverviewCard.css';
const OverviewCard = ({ overview }) => {
    const { name, quantity, icon } = overview;
    return (
        <div className='cols'>
            <div className="overviewCard text-center" data-aos="fade-down">
                <MDBIcon fas icon={icon} size='3x' className='color-prime' />

                <h2>{name}</h2>
                <h1 className='fw-bold'>{quantity} <span className='color-prime'>+</span></h1>
            </div>

        </div>
    );
};

export default OverviewCard;