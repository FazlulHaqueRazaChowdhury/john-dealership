import React from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    const data = [
        { name: 'Regular', price: '100$', f1: '10 Ads/Day', f2: 'Overview With 2 Graph', f3: 'Can Stock more than 500', f4: 'Free Delivery To Customers', icon: 'cross', rec: false, iconCol: false },
        { name: 'Premium', price: '500$', f1: '50 Ads/Day', f2: 'Overview With 10 Graph', f3: 'Can Stock more than 1500', f4: 'Free Delivery To Customers', icon: 'cross', rec: true, iconCol: false },
        { name: 'Elite', price: '1000$', f1: '100 Ads/Day', f2: 'Overview With all Graph', f3: 'Can Stock unlimited cars', f4: 'Free Delivery To Customers', icon: 'right', rec: false, iconCol: true },
    ]
    return (
        <div className='container m-100'>
            <h1 className='fw-bold text-center'>Pricing</h1>
            <h5 className='text-center'>Currently You're using the <span className='text-danger'>free version</span>. So You will be limited to many features.</h5>
            <div className="row row-cols 1 row-cols-3 mt-5">
                {
                    data.map(pricing => <PricingCard pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;