import React from 'react';
import Item from '../Item/Item';
import Slider from "react-slick";
const HomeItems = () => {
    const data = [
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
        {
            img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
            name: 'Mercedes Benz Class S',
            shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deserunt mollitia veniam, dolorem libero magnam in fugit iusto? Incidunt!',
            quantity: '10',
            price: '1.5M',
            supplierName: 'Sokina Trades',
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
    return (

        <div className='m-100'>
            <div className="container">
                <h2 className='fw-bold color-special text-center mb-3'>Update Your Items</h2>
                <Slider {...settings}>
                    {
                        data.map(item => <Item item={item}></Item>)
                    }
                </Slider>
                <div className="d-flex mt-5">
                    <button className='mainButton w-50 mx-auto'>Manage Inventories</button>
                </div>
            </div>
        </div>
    )
}

export default HomeItems;