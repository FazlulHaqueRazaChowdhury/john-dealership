
import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBIcon, MDBInput, MDBSpinner } from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { toast } from 'react-toastify';

import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
const LogIn = () => {

    let navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [jwtEmail, setEmail] = useState('');

    const [user2, loading2, error2] = useAuthState(auth);



    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

        setEmail(email);






    }
    useEffect(() => {
        if (user) {

            axios.post('https://calm-fortress-89942.herokuapp.com/login', { email: jwtEmail })
                .then(res => {
                    localStorage.setItem('access-token', res.data.accessToken)
                })
                .then(
                    res => {
                        navigate(from);
                        toast.success('User is logged In')
                    }
                )

        }
    }, [user])
    useEffect(() => {
        if (googleUser) {

            toast.success('User Signed In With Google')
            navigate(from);

        }
    }, [googleUser])
    useEffect(() => {
        if (error) {


            switch (error?.code) {
                case 'auth/email-already-in-use':
                    toast.error('Email Already Exists')
                    break;
                case 'auth/invalid-email':
                    toast.error('Email Is invalid')
                    break;
                case 'auth/invalid-password':
                    toast.error('Password is invalid')
                    break;
                case 'auth/wrong-password':
                    toast.error('Credential Is Wrong. Please check your email and password.')
                    break;
                default:
                    toast.error('Something Went Wrong. Make sure you have signed up or please check your Password and Email. Or try again later.');
                    break;
            }

        }
    }, [error])
    useEffect(() => {
        if (googleError) {
            switch (googleError?.code) {
                case 'auth/email-already-in-use':
                    toast.error('Email Already Exists')
                    break;

                default:
                    toast.error('Something went wrong');
                    break;

            }
        }
    }, [googleError])

    if (loading2 || loading) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center min-height-100vh'>
            <form className='border  shadow rounded py-5 px-5' onSubmit={handleSubmit}>
                <h1 className='text-center color-prime'>Log In</h1>
                {/* email field */}
                <MDBInput name='email' label='Email' id='typeEmail' type='email' className='my-2' required />

                {/* password field */}
                <MDBInput name='password' label='Password' id='typePassword' type='password' className='my-2' required />
                <div className="mt-2">

                </div>





                <div className="d-flex justify-content-center my-4">
                    <MDBBtn outline color='danger'>Log In</MDBBtn>
                </div>
            </form>

            <div className="extra-inputs mt-5">
                <p>Forgot Your Password?<Link to='/forgotPass'> Click Here!</Link></p>
                <p>Don't have an account? <Link to='/signup'>Sign Up Here.</Link></p>
            </div>

            <div className="alternative mt-5 d-flex align-items-center">
                <div className="lines me-3"></div>
                <h6>Or</h6>
                <div className="lines ms-3"></div>
            </div>
            <div className="extra-signIn-options">
                <MDBBtn color='danger' className='mt-3'
                    onClick={
                        () => {
                            signInWithGoogle();

                        }
                    }
                ><MDBIcon fab icon="google" /> Sign In with Google</MDBBtn>
            </div>

        </div>
    );
};

export default LogIn