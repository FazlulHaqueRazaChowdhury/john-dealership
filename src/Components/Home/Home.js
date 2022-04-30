import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import HomeItems from '../HomeItems/HomeItems';
import Overview from '../Overview/Overview';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>

            <Banner />
            <Overview />
            <HomeItems />
            <Pricing />
        </div>
    );
};

export default Home;