import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Item.css';
const Item = ({ item }) => {
    const { name, price, img, quantity, shortDesc, supplierName } = item;
    return (
        <div className='mx-3'>
            <MDBCard className='card'>
                <MDBCardImage
                    src={img}
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className='text-center color-special fw-bold'>{name}</MDBCardTitle>
                    <MDBCardText>
                        <p>{shortDesc}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <h4 className='color-prime me-auto border-right'>{price}$</h4>
                            <p className='text-center mt-2 supply'>Supplied By <span className='color-prime fw-bold'>{supplierName}</span></p>
                            <h5 className='ms-auto border-left'>{quantity} left</h5>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className='mainButton'>Update</button>
                        </div>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default Item;