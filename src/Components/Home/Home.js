import { MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import Banner from '../Banner/Banner';

import HomeItems from '../HomeItems/HomeItems';
import Overview from '../Overview/Overview';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
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