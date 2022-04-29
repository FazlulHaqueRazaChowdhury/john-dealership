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
            <MDBNavbar expand='lg' light bgColor='light'>
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
                            <Link to='/'>Home</Link>

                            <Link to='/blogs'>BLogs</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default Header;