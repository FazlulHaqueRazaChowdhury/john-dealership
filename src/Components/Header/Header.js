import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Header.css';
import { Link, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    //set show nav
    const [nav, setNavbar] = useState(false);
    //mdbbootstrap 
    const [showNavSecond, setShowNavSecond] = useState(false);
    //for navbar information
    const companyInfo = {
        img: 'https://i.ibb.co/ZMwyFz2/210-2104265-vaporwave-vector-car-hd-png-download-removebg-preview.png',
        name: 'JOHN.'
    };

    const { name, img } = companyInfo;

    //this will change the color of the navbar on scroll
    const changeBackground = () => {

        if (window.scrollY >= 66) {

            setNavbar(true)
        }
        else if (window.scrollY === 0) {

            setNavbar(false)
        }
    }
    useEffect(() => {

        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div>
            <MDBNavbar fixed='top' style={{
                backgroundColor: nav ? 'white' : 'transparent',
                transition: 'background-color linear .3s'
            }} expand='lg'>
                <MDBContainer>

                    <div className="left-part">
                        <Link to='/'>
                            <img
                                src={img}
                                height='70'
                                alt=''
                                loading='lazy'
                            />
                            <span className='color-special fw-bold'>{name}</span>
                        </Link>

                    </div>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon fas icon={showNavSecond ? 'times' : 'align-right'} className='color-prime' />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav className='justify-content-end' >
                            <MDBNavbarItem>
                                <Link to='/' className='me-4 color-special'>Home</Link>
                            </MDBNavbarItem>

                            {
                                user ?
                                    <div className='d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center'>
                                        <MDBNavbarItem>
                                            <Link to='/manageinventory' className='me-4 color-special'>Manage Inventory</Link>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem>
                                            <Link to='/additem' className='me-4 color-special'>Add Items</Link>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem>
                                            <Link to='/myitem' className='me-4 color-special'>My Items</Link>
                                        </MDBNavbarItem>
                                    </div> : ''
                            }
                            <MDBNavbarItem>
                                <Link to='/blogs' className='me-4 color-special'>Blogs</Link>
                            </MDBNavbarItem>


                            {

                                user ? <MDBNavbarItem className='d-flex flex-column flex-lg-row align-items-center'>
                                    <MDBBtn

                                        onClick={() => {
                                            signOut(auth);
                                        }}

                                        outline color='danger' className='me-4 color-special'>Sign Out</MDBBtn>
                                    <div className="h-100">
                                        <h6>{user?.email}</h6>
                                    </div>
                                </MDBNavbarItem>
                                    : <MDBNavbarItem>
                                        <Link to='/signup' className='me-4 color-special'>Sign Up</Link>
                                    </MDBNavbarItem>

                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default Header;