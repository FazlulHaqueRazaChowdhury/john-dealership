import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="container">

                <div className="d-flex flex-md-column flex-lg-row justify-center align-items-center">

                    <div className="bg-nissan">
                        <div className="text-part">
                            <div>
                                <h5>Welcome to <span className='color-prime'>JOHN.</span></h5>

                            </div>

                            <div className="color-black mt-3  mx-auto">
                                <div className="center">
                                    <h1 className='fw-bold'>Manage Your loving</h1>
                                    <h1 className='fw-bold'>Cars Stock With the best.</h1>
                                </div>
                            </div>
                            <div className="color-special  mx-auto">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae non modi nam atque animi rerum hic odit aperiam facere accusantium saepe obcaecati nemo quisquam, illo ipsam reprehenderit officia amet?</p>
                            </div>
                            <MDBBtn outline className='mx-2 custom-button' color='danger'>STOCK NOW</MDBBtn>
                            <MDBBtn className='mx-2 custom-button' color='danger'>Need Help?</MDBBtn>
                        </div>
                    </div>
                    <div className="image-part relative">
                        <img src="https://i.ibb.co/8mKbP8b/lets-adding-it-some-value-car-with-no-brand-11562979937rcamhaeaff-removebg-preview.png" alt="" />
                        <div className="absolute">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;