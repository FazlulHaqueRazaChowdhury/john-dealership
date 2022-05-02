import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBIcon, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import './PricingCard.css';
const PricingCard = ({ pricing }) => {
    const { name, price, f1, f2, f3, f4, icon, iconCol, rec } = pricing;
    return (
        <div className='d-flex justify-content-center' data-aos="fade-up" >

            <MDBCard style={{ maxWidth: '20rem', padding: '20px 10px', borderRadius: '40px' }} className={rec ? 'rec shadow' : 'shadow'}>

                <MDBCardBody>
                    {rec && <MDBBadge className='badge ms-2 bg-danger'>Recomended</MDBBadge>}
                    <MDBCardTitle className='text-center'><h3>{name}</h3></MDBCardTitle>
                    <MDBCardSubTitle className='fw-bold mt-3'>Features:</MDBCardSubTitle>
                    <MDBCardText className='mt-2'>
                        <ul className='pricingUl'>
                            <li><MDBIcon fas icon="check" className='text-success  me-2' />{f1}</li>
                            <li><MDBIcon fas icon="check" className='text-success me-2' />{f2}</li>
                            <li><MDBIcon fas icon="check" className='text-success me-2' />{f3}</li>
                            <li><MDBIcon fas icon={icon} className={iconCol ? 'text-success me-2' : 'color-prime me-2'} />{f4}</li>
                        </ul>
                        <h3 className='text-center'>{price}/<span className='color-prime'>Mo.</span></h3>
                        <div className="d-flex justify-content-center mt-5">
                            <MDBBtn
                                outline
                                className='rounded-pill'
                                color='danger'>Become a {name} Member </MDBBtn>
                        </div>
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default PricingCard;