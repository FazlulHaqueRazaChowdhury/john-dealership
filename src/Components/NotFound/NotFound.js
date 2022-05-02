import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='m-100 d-flex justify-content-center align-items-center' style={{
            backgroundImage: `url('https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',

        }}>
            <MDBBtn className='text-center' color='danger' onClick={() => {
                navigate('/')
            }}>Go Back Home</MDBBtn>
        </div>
    );
};

export default NotFound;