import React from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    const data = [
        { id: '1', name: 'Regular', price: '100$', f1: '10 Ads/Day', f2: 'Overview With 2 Graph', f3: 'Can Stock more than 500', f4: 'Free Delivery To Customers', icon: 'times', rec: false, iconCol: false },
        { id: '2', name: 'Premium', price: '500$', f1: '50 Ads/Day', f2: 'Overview With 10 Graph', f3: 'Can Stock more than 1500', f4: 'Free Delivery To Customers', icon: 'times', rec: true, iconCol: false },
        { id: '3', name: 'Elite', price: '1000$', f1: '100 Ads/Day', f2: 'Overview With all Graph', f3: 'Can Stock unlimited cars', f4: 'Free Delivery To Customers', icon: 'check', rec: false, iconCol: true },
    ]
    return (
        <div className='container m-100'>
            <h3 className='fw-bold text-center'>Pricing</h3>
            <h6 className='text-center'>Currently You're using the <span className='color-prime'>free version</span>. So You will be limited to many features.</h6>
            <div className="row row-cols-1 row-cols-lg-3  gy-3 justify-content-center mt-5 align-items-center">
                {
                    data.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;