import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Restock({ item, setItem }) {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    const handleUpdate = (event) => {
        event.preventDefault();
        const stockItem = event.target.stockItem.value;
        const updateQuantity = parseInt(item?.quantity) + parseInt(stockItem);

        axios.put(`http://localhost:5000/items/${item._id}`, {
            quantity: updateQuantity,
            sold: item?.sold
        })
            .then(response => {
                setItem({
                    ...item,
                    quantity: updateQuantity,
                    sold: item?.sold
                })
                toast.success('The Item has been restocked')
            });

    }
    return (
        <>

            <MDBBtn
                className="w-100 my-5 me-2"
                color="danger"
                outline
                onClick={toggleShow}
            >
                Restock
            </MDBBtn>
            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Update the stock</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={handleUpdate}>
                                <MDBInput label='Restock' name='stockItem' id='form1' type='text' />
                                <MDBModalFooter>

                                    <MDBBtn type='submit' outline color='danger'>Save changes</MDBBtn>
                                </MDBModalFooter>
                            </form>
                        </MDBModalBody>
                        <MDBBtn color='danger' onClick={toggleShow}>
                            Close
                        </MDBBtn>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}