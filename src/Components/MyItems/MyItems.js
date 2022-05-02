import axios from 'axios';
import { MDBBtn, MDBIcon, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useItems from '../../Hooks/useItems';

const MyItems = () => {

    const [user, loading] = useAuthState(auth);
    const [data, setData, loading1] = useItems(0, user.email, 'items');

    const navigate = useNavigate();
    const hanldeUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    const handleDelete = (id) => {
        confirmAlert({
            title: 'Delete the item',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {

                        axios.delete(`https://calm-fortress-89942.herokuapp.com/items/${id}`)
                            .then(res => {

                                const find = data.find(item => item._id === id);
                                const remain = data.filter(rest => find._id !== rest._id)
                                setData(remain);
                                toast.error('Deleted the item')
                            }

                            )
                    }
                },
                {
                    label: 'No',
                    onClick: () => toast.success("You didn't deleted the product ")
                }
            ]
        });



    }


    if (loading1) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
    return (
        <div className='container'>
            <div className="m-100">
                <MDBTable responsive>
                    <MDBTableHead className='table-danger'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Sold</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data.map(item =>
                                <tr>
                                    <th scope='row'>{item?._id}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.sold}</td>
                                    <td>
                                        <MDBBtn color='danger' onClick={() => {
                                            handleDelete(item?._id)
                                        }}>
                                            <MDBIcon far icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' className='ms-2' outline onClick={() => {
                                            hanldeUpdate(item?._id);
                                        }}>Update</MDBBtn>
                                    </td>
                                </tr>)
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
            <MDBBtn className="rounded-pill" outline color="danger" onClick={() => {
                navigate('/additem')
            }}>Add a item</MDBBtn>
        </div >
    );
};

export default MyItems;