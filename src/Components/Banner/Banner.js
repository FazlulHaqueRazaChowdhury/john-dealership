import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="container">

                <div className="d-flex flex-column flex-md-column flex-lg-row justify-center align-items-center">

                    <div className="bg-nissan order-1 order-lg-0 ">
                        <div className="text-part p-3">
                            <div data-aos="fade-right" data-aos-duration="500">
                                <h5>Welcome to <span className='color-prime'>JOHN.</span></h5>

                            </div>

                            <div className="color-black mt-3  mx-auto" data-aos="fade-right" data-aos-duration="1000">
                                <div className="center">
                                    <h1 className='fw-bold'>Manage Your loving</h1>
                                    <h1 className='fw-bold'>Cars Stock With the best.</h1>
                                </div>
                            </div>
                            <div className="color-special  mx-auto" data-aos="fade-right" data-aos-duration="2000">
                                <p className='text-justify' style={{
                                    textAlign: 'justify',
                                }}>Welcome to our management website of the John Car Dealership. We have the best car warehouse management service system. You can stock the Premium Beasts of yours.Feel to store your car. Our Team will be with you. Thanks for being with us.If you need any help there is a button down below click it!  </p>
                            </div>
                            <MDBBtn outline className='mx-2 custom-button' color='danger' data-aos="fade-right" data-aos-duration="2500">STOCK NOW</MDBBtn>
                            <MDBBtn className='mx-2 custom-button' color='danger' data-aos="fade-right" data-aos-duration="3000">Need Help?</MDBBtn>
                        </div>
                    </div>
                    <div className="image-part relative" >
                        <img src="https://i.ibb.co/8mKbP8b/lets-adding-it-some-value-car-with-no-brand-11562979937rcamhaeaff-removebg-preview.png" alt="" data-aos="fade-left" data-aos-duration="2000" />
                        <div className="absolute">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;