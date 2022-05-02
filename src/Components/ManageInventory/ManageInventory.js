import React from 'react';
import useItems from '../../Hooks/useItems';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBSpinner } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import './ManageInventory.css'
import { useNavigate } from 'react-router-dom';
const ManageInventory = () => {

    const [data, setData, loading1] = useItems(0, '', 'items6');
    const navigate = useNavigate();

    if (loading1) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
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
    return (
        <div className='container'>
            <div className="m-100">
                <h3 className='text-center'>Manage <span className='color-prime'>Inventory</span></h3>
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

export default ManageInventory;