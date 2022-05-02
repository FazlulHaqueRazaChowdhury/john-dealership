import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OverviewCard from '../OverviewCard/OverviewCard';

const Overview = () => {
    const [overview, setOverview] = useState({
        "totalSold": 2,
        "totalPrice": 0,
        "totalQuantity": 0
    });
    const data = [
        { id: '1', icon: 'balance-scale', name: 'Quantity', currency: '', quantity: overview?.totalQuantity },
        { id: '2', icon: 'truck', name: 'Delivered', currency: '', quantity: overview?.totalSold },
        { id: '3', icon: 'dollar-sign', name: 'Total Sold', currency: 'M $', quantity: overview?.totalPrice },
        { id: '4', icon: 'user-circle', name: 'Happy Clients', currency: '', quantity: overview?.totalSold - 2 },
    ]
    useEffect(() => {
        axios.get(`https://calm-fortress-89942.herokuapp.com/info`)
            .then(res => setOverview(res.data));
    }, [])
    return (
        <div className='container m-100' style={{
            backgroundColor: 'rgba(124, 131, 138, 0.041)'
        }}>
            <h3 className='fw-bold color-special text-center pt-5'>A slight view of our <span className="color-prime">success.</span></h3>
            <div className="cards row row-cols-1 row-cols-lg-4 gy-3 py-5 px-5">
                {
                    data.map(overview => <OverviewCard key={overview.id} overview={overview}></OverviewCard>)
                }
            </div>

        </div>
    );
};

export default Overview;