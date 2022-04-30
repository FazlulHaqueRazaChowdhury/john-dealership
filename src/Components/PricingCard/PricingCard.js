import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBIcon } from 'mdb-react-ui-kit';
import './PricingCard.css';
const PricingCard = ({ pricing }) => {
    const { name, price, f1, f2, f3, f4, icon, iconCol } = pricing;
    return (
        <div>
            <MDBCard style={{ maxWidth: '20rem', padding: '20px 10px', borderRadius: '40px' }} className='shadow'>
                <MDBCardBody>
                    <MDBCardTitle><h3>{name}</h3></MDBCardTitle>
                    <MDBCardSubTitle className='fw-bold mt-3'>Features:</MDBCardSubTitle>
                    <MDBCardText className='mt-2'>
                        <ul className='pricingUl'>
                            <li><MDBIcon fas icon="check" className='text-success  me-2' />{f1}</li>
                            <li><MDBIcon fas icon="check" className='text-success me-2' />{f2}</li>
                            <li><MDBIcon fas icon="check" className='text-success me-2' />{f3}</li>
                            <li><MDBIcon fas icon="check" className={iconCol ? 'text-success' : 'text-danger'} />{f4}</li>
                        </ul>
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default PricingCard;