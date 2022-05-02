import axios from 'axios';
import { MDBSpinner } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    const [data, setData] = useState([]);
    const [loading2, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://calm-fortress-89942.herokuapp.com/pricing')
            .then(res => setData(res.data));
        setLoading(false);
    }, [])

    if (loading2) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
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