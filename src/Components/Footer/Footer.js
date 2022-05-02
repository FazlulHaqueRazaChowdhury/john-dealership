import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted m-100'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='color-prime'>
                    <a href='https://www.facebook.com/fhrcAiman' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://twitter.com/home' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.google.com/' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='https://github.com/FazlulHaqueRazaChowdhury' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src="https://i.ibb.co/ZMwyFz2/210-2104265-vaporwave-vector-car-hd-png-download-removebg-preview.png" width='100px' alt="" />
                                JOHN CAR DEALERSHIP
                            </h6>
                            <p>
                                Started as a company now it's a family for us.Wil be the best store management system in the world.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase color-prime fw-bold mb-4'>
                                Special Thanks To
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    MDBootstrap
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Node JS & MongoDB
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Programming Hero
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase color-prime fw-bold mb-4'>
                                Menu
                            </h6>
                            <p>
                                <Link to='/' className='text-reset'>
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link to='/blogs' className='text-reset'>
                                    Blogs
                                </Link>
                            </p>
                            <p>
                                <Link to='/signup' className='text-reset'>
                                    Sign Up
                                </Link>
                            </p>
                            <p>
                                <Link to='/login' className='text-reset'>
                                    Log In
                                </Link>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 color-prime'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i>
                                Wakanda,Uganda
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                john@dealership.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='color-prime fw-bold' href='#'>
                    John Dealership
                </a>
            </div>
        </MDBFooter>
    );
}