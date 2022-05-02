import React from 'react';
import Item from '../Item/Item';
import Slider from "react-slick";
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';
import { MDBSpinner } from 'mdb-react-ui-kit';
const HomeItems = () => {
    const navigate = useNavigate();
    const [data, setData, loading1] = useItems(6, '', 'items6');

    if (loading1) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
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
                <h3 className='fw-bold color-special text-center'>Manage Your <span className='color-prime'>Beasts.</span></h3>
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