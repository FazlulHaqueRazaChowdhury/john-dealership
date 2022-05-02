import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBIcon, MDBInput, MDBSpinner } from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import { useAuthState } from 'react-firebase-hooks/auth';
import { sendEmailVerification } from 'firebase/auth';
const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });


    const [user2, loading2, error2] = useAuthState(auth);

    const [errors, setErrors] = useState({
        emailError: '',
        passValidError: '',
        passwordError: '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        //for email validation:
        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        //for passwordValidation:
        const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
        //if email is valid

        if (validEmail) {

            if (validPassword) {


                if (password === confirmPassword) {
                    setErrors({ emailError: <p className='text-success'>Email is valid.</p>, passValidError: <p className='text-success'>Strong Password.</p>, passwordError: <p className='text-success'>Password Matched</p> })
                    createUserWithEmailAndPassword(email, password);
                }
                else {
                    setErrors({
                        ...errors, passwordError: <p className='color-prime'>Password Didn't Matched</p>

                    })

                }
            }
            else {
                setErrors({ ...errors, passValidError: <p className='color-prime'>Minimum one letter and one special character</p> })
            }
        }

    }
    useEffect(() => {
        if (user) {
            toast.warn('Email Verification Send');
            toast.success('User Registered!')
            navigate(from);

        }
    }, [user])
    useEffect(() => {
        if (googleUser) {

            toast.success('User Signed In With Google')
            navigate(from);
            console.log(user);
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
                default:
                    toast.error('something went wrong');
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
                <h1 className='text-center color-prime'>Sign Up</h1>
                {/* email field */}
                <MDBInput name='email' label='Email' id='typeEmail' type='email' className='my-2' required />
                <div className="mt-2">
                    {errors.emailError}
                </div>
                {/* password field */}
                <MDBInput name='password' label='Password' id='typePassword' type='password' className='my-2' required />
                <div className="mt-2">
                    {errors.passValidError}
                </div>
                {/* confirm field */}
                <MDBInput name='confirmPassword' label='Confirm Password' id='typePassword' type='password' className='my-2' required />

                <div className="mt-2">
                    {errors.passwordError}
                </div>

                <div className="d-flex justify-content-center my-4">
                    <MDBBtn outline color='danger'>Sign Up</MDBBtn>
                </div>
            </form>

            <div className="extra-inputs mt-5">

                <p>Already have an account? <Link to='/login'>Log In.</Link></p>
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
                            console.log(googleUser);
                        }
                    }
                ><MDBIcon fab icon="google" /> Sign In with Google</MDBBtn>
            </div>

        </div>

    );
};

export default SignUp;