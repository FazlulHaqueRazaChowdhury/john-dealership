import React, { useState } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Select from 'react-select'
import { toast } from 'react-toastify';
import axios from 'axios';
const AddItem = () => {
    const [user, loading] = useAuthState(auth);
    const [fuel, setFuel] = useState('Petrol');
    const [gear, setGear] = useState('Auto');

    const optionsGear = [
        { value: 'Auto', label: 'Auto' },
        { value: 'Manual', label: 'Manual' },

    ]
    const optionsFuel = [
        { value: 'Petrol', label: 'Petrol' },
        { value: 'Disel', label: 'Disel' },
        { value: 'Octane', label: 'Octane' }
    ]

    const handleSelectFuel = (opt) => {
        setFuel(opt?.value)

    }
    const handleGear = (opt) => {

        setGear(opt?.value)

    }

    const handleSubmit = event => {
        event.preventDefault();
        if (isNaN(parseInt(event.target.carPrice.value)) || isNaN(parseInt(event.target.carQuantity.value))) {
            toast.error('Please put the a numeric value in price and quantity!')
        }
        else {

            const info = {
                img: event.target.img.value,
                name: event.target.name.value,
                shortDesc: {
                    speed: event.target.speed.value,
                    gear: gear,
                    fuel: fuel
                },
                quantity: parseInt(event.target.carQuantity.value),
                sold: 0,
                price: parseInt(event.target.carPrice.value),
                userEmail: user.email,
                supplierName: event.target.supplier.value
            }
            axios.post(`http://localhost:5000/items`, info)
                .then(res =>
                    toast.success('Item added')
                )

        }


    }
    return (
        <div className='container'>
            <div className="m-100">
                <h1 className='text-center color-special'>Add your item</h1>
                <form onSubmit={handleSubmit}>
                    <h3 className='color-prime'>Basic Info</h3>
                    <MDBInput className='my-4' label='Your Item Name' name='name' id='typeText' type='text' />
                    <MDBInput className='my-4' label='Your Item Image Link (Side View)' name='img' id='typeText' type='text' />
                    <MDBInput className='my-4' label='Quantity You have' name='carQuantity' id='typeText' type='text' />
                    <MDBInput className='my-4' label='Price in Million' name='carPrice' id='typeText' type='text' />
                    <MDBInput className='my-4' label='Email' value={user.email} name='price' id='typeText' type='text' />
                    <MDBInput className='my-4' label='Supplier Name' name='supplier' id='typeText' type='text' />

                    <h3 className='color-prime'>Features</h3>

                    <MDBInput className='my-4' label='Speed' name='speed' id='typeText' type='text' />
                    <label htmlFor="gear">Gear</label>
                    <Select name='gear' options={optionsGear} defaultValue={optionsGear[0]} onChange={handleGear} />

                    <label htmlFor="gear">Fuel</label>
                    <Select name='fuel' options={optionsFuel} defaultValue={optionsFuel[0]} onChange={handleSelectFuel} />
                    <MDBBtn className='btn-danger mt-5'>Add Item</MDBBtn>
                </form>

            </div>
        </div >
    );
};

export default AddItem;
