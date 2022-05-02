import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import './OverviewCard.css';
import CountUp from 'react-countup';
const OverviewCard = ({ overview }) => {
    const { name, quantity, icon, currency } = overview;
    return (
        <div className='cols'>
            <div className="overviewCard text-center shadow" data-aos="fade-down">
                <MDBIcon fas icon={icon} size='2x' className='color-prime' />

                <h2>{name}</h2>
                <h1 className='fw-bold'>
                    <CountUp
                        start={0}
                        end={quantity}
                        duration={2.75}
                    ></CountUp>
                    {currency}
                    <span className='color-prime'>+</span></h1>
            </div>

        </div>
    );
};

export default OverviewCard;