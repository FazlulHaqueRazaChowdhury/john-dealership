import React from 'react';
import Item from '../Item/Item';
import Slider from "react-slick";
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';
const HomeItems = () => {
    const navigate = useNavigate();
    const [data, setData] = useItems(6);
    // const data = [
    //     {
    //         img: 'https://i.ibb.co/JnvkhZ7/29-297724-transparent-background-car-png-png-download-removebg-preview.png',
    //         name: 'Mercedes Benz Class S',
    //         shortDesc: {
    //             speed: '20',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '10',
    //         price: '1.5',
    //         supplierName: 'Sokina Trades',
    //     },
    //     {
    //         img: 'https://i.ibb.co/2y8LV32/lambo-removebg-preview.png',
    //         name: 'Lamborghini Aventador',
    //         shortDesc: {
    //             speed: '30',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '20',
    //         price: '2.5',
    //         supplierName: 'Billu Trades',
    //     },
    //     {
    //         img: 'https://i.ibb.co/YL0kBrX/2-removebg-preview.png',
    //         name: 'Mustan GT',
    //         shortDesc: {
    //             speed: '10',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '20',
    //         price: '.5',
    //         supplierName: 'Lulu-Mia Trades',
    //     },
    //     {
    //         img: 'https://i.ibb.co/TbPRzmn/3-removebg-preview.png',
    //         name: 'Lotous M4',
    //         shortDesc: {
    //             speed: '25',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '10',
    //         price: '1.5',
    //         supplierName: 'Molom Chy Trades',
    //     },
    //     {
    //         img: 'https://i.ibb.co/ZGLp8g3/4-removebg-preview.png',
    //         name: 'Toyota Corza',
    //         shortDesc: {
    //             speed: '10',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '10',
    //         price: '0.2',
    //         supplierName: 'Tel-Mia Trades',
    //     },
    //     {
    //         img: 'https://i.ibb.co/0CpF5VG/5-removebg-preview.png',
    //         name: 'Toyota Premio',
    //         shortDesc: {
    //             speed: '20',
    //             gear: 'Auto',
    //             fuel: 'Petrol'
    //         },
    //         quantity: '35',
    //         price: '1.5M',
    //         supplierName: 'Pankha Khan',
    //     },
    // ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },



        ]
    }
    return (

        <div className='m-100'>
            <div className="container">
                <h2 className='fw-bold color-special text-center'>Update Your Items</h2>
                <Slider {...settings}>
                    {
                        data.map(item => <Item key={data._id} item={item}></Item>)
                    }
                </Slider>
                <div className="d-flex mt-5">
                    <button className='mainButton w-50 mx-auto'
                        onClick={() => {
                            navigate('/manageinventory')
                        }}
                    >Manage Inventories</button>
                </div>
            </div>
        </div>
    )
}

export default HomeItems;