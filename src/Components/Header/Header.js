import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    //mdbbootstrap 
    const [showNavSecond, setShowNavSecond] = useState(false);
    //for navbar information
    const companyInfo = {
        img: 'https://i.ibb.co/ZMwyFz2/210-2104265-vaporwave-vector-car-hd-png-download-removebg-preview.png',
        name: 'JOHN.'
    };

    const { name, img } = companyInfo;

    return (
        <div>
            <MDBNavbar expand='lg'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>
                        <img
                            src={img}
                            height='70'
                            alt=''
                            loading='lazy'
                        />
                        <span className='color-special fw-bold'>{name}</span>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav className='justify-content-end' >
                            <MDBNavbarItem>
                                <Link to='/' className='me-4 color-special'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/blogs' className='me-4 color-special'>Blogs</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Link to='/signup' className='me-4 color-special'>Sign Up</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default Header;