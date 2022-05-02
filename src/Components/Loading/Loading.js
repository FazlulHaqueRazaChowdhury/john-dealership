import { MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';

const Loading = () => {

    return (
        <div className="min-height-100vh d-flex align-items-center justify-content-center">
            <MDBSpinner role='status' className='text-center'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )
};

export default Loading;