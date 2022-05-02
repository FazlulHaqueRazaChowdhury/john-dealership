import { MDBBtn, MDBInput, MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const ForgotPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();

    if (sending) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
    if (error) {
        toast.error(error.message);
    }
    return (
        <div className='container m-100'>
            <h1 className='text-center'>Forgot Your Password?</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await sendPasswordResetEmail(e.target.email.value);
                toast.success('Password Reset Link Sent!')
                navigate('/login');

            }} className='w-50 mx-auto'>
                <MDBInput label='Forgotten Password Mail' name='email' type='email' id='typeEmail' required></MDBInput>
                <MDBBtn color='danger' className='my-2'>Send Reset Password Link!</MDBBtn>
            </form>
        </div>
    );
};

export default ForgotPass;