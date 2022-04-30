import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Item.css';
import { useNavigate } from 'react-router-dom';
const Item = ({ item }) => {
    const { _id, name, price, img, quantity, shortDesc, supplierName } = item;
    const { speed, fuel, gear } = shortDesc;
    const navigate = useNavigate();
    const hanldeUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='mx-3 mt-5 p-4'>
            <MDBCard className='card shadow h-100 ' data-aos="fade-left" >
                <div style={{
                    height: '110px'
                }}>
                    <div className="p-5">
                        <MDBCardImage
                            src={img}
                            alt='...'
                            position='top'
                            className='mx-auto'
                            style={{
                                objectFit: 'cover',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
                <MDBCardBody>
                    <MDBCardTitle className='text-center color-special fw-bold mt-5'>{name}</MDBCardTitle>
                    <MDBCardText>
                        <div className="short-desc row row-cols-1 row-cols-lg-3">
                            <h5 className='text-center border-right'>  <MDBIcon fas icon="tachometer-alt" className='me-2 color-prime' />{speed}K</h5>

                            <h5 className='text-center'>  <MDBIcon fas icon="cogs" className='me-2 color-prime' />{gear}</h5>
                            <h5 className='text-center border-left'>  <MDBIcon fas icon="gas-pump" className='me-2 color-prime' />{fuel}</h5>
                        </div>
                        <div className="d-flex  justify-content-center align-items-center" style={{
                            minHeight: '60px'
                        }}>
                            <h4 className='color-prime me-auto border-right-price'>{price}M$</h4>
                            <p className='text-center mt-2 supply'>Supplied By <span className='color-prime fw-bold'>{supplierName}</span></p>
                            <h5 className='ms-auto border-left-quantity'>{quantity} left</h5>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className='mainButton' onClick={() => {
                                hanldeUpdate(_id);
                            }}>Update</button>
                        </div>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default Item;