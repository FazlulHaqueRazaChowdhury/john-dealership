import React from 'react';
import OverviewCard from '../OverviewCard/OverviewCard';

const Overview = () => {
    const data = [
        { icon: 'balance-scale', name: 'Quantity', quantity: '100' },
        { icon: 'truck', name: 'Delivered', quantity: '10' },
        { icon: 'dollar-sign', name: 'Total Sold', quantity: '1.5M$' },
        { icon: 'user-circle', name: 'Happy Clients', quantity: '10' },
    ]
    return (
        <div className='container m-100' style={{
            backgroundColor: 'rgba(124, 131, 138, 0.041)'
        }}>
            <h1 className='fw-bold color-special text-center pt-5'>Overview</h1>
            <div className="cards row row-cols-1 row-cols-lg-4 gy-3 py-5 px-4">
                {
                    data.map(overview => <OverviewCard overview={overview}></OverviewCard>)
                }
            </div>

        </div>
    );
};

export default Overview;