import axios from "axios";
import { MDBBtn, MDBIcon, MDBSpinner } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Restock from "../Restock/Restock";

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get(`https://calm-fortress-89942.herokuapp.com/items/${id}`)
            .then((res) => {
                setItem(res.data)
                setLoading(false);
            });

    }, []);
    // const brandModel = item?.name?.split(' ')

    const handleDeliver = () => {
        const newQuantity = parseInt(item?.quantity) - 1;
        const newSold = parseInt(item?.sold) + 1;

        if (newQuantity >= 0) {
            const updateInfo = {
                quantity: newQuantity,
                sold: newSold,
            };
            fetch(`https://calm-fortress-89942.herokuapp.com/items/${id}`, {
                method: "PUT", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateInfo),
            })
                .then((response) => response.json())
                .then((data) => {
                    setItem({
                        ...item,
                        ...updateInfo,
                    });
                });

        } else {
            toast.warning("Please Restock the Car.");
        }
    };

    if (loading) {
        return (
            <div className="min-height-100vh d-flex align-items-center justify-content-center">
                <MDBSpinner role='status' className='text-center'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        );
    }
    return (
        <div className="min-height-100vh container d-flex align-items-center justify-content-center">
            <div className="m-100">
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="img d-flex flex-column h-100 ">
                        <img src={item?.img} alt="" style={{
                            maxWidth: '840px'
                        }} />
                        <div className="d-flex flex-column flex-lg-row">
                            <MDBBtn
                                className="w-100 my-5 me-2"
                                color="danger"
                                onClick={() => {
                                    handleDeliver();
                                }}
                            >
                                Delivered
                            </MDBBtn>
                            <Restock setItem={setItem} item={item} />
                        </div>
                    </div>
                    <div className="text ms-5">
                        <div className="basic-details">
                            <h6>
                                {" "}
                                <MDBIcon fas icon="signature" />
                                Car ID : {item?._id}
                            </h6>
                            <span>Car Name:</span>
                            <h3>
                                <span className="color-prime fw-bold mt">{item?.name}</span>
                            </h3>
                            <span>
                                <MDBIcon fas icon="hands-helping" className="color-prime" />{" "}
                                Supplied By:{" "}
                            </span>
                            <h5 className="color-special">{item?.supplierName}</h5>
                            <span>
                                <MDBIcon fas icon="warehouse" className="color-prime" />{" "}
                                Quantity:{" "}
                            </span>
                            <h5 className="color-special">{item?.quantity} left</h5>
                            <span>
                                <MDBIcon far icon="clone" className="color-prime me-2" />
                                Features
                            </span>
                            <div className="short-desc row row-cols-1 row-cols-lg-3">
                                <h5 className="border-right d-flex justify-content-center align-items-center">
                                    {" "}
                                    <MDBIcon
                                        fas
                                        icon="tachometer-alt"
                                        className="me-2 color-prime"
                                    />
                                    {item?.shortDesc?.speed}K
                                </h5>

                                <h5 className="d-flex justify-content-center align-items-center">

                                    <MDBIcon fas icon="cogs" className="me-2 color-prime " />
                                    {item?.shortDesc?.gear}
                                </h5>
                                <h5 className="border-left d-flex justify-content-center align-items-center">

                                    <MDBIcon fas icon="gas-pump" className="me-2 color-prime" />
                                    {item?.shortDesc?.fuel}
                                </h5>
                            </div>
                            <div className="d-flex">
                                <div className="border-right pe-2">
                                    <span>
                                        <MDBIcon
                                            fas
                                            icon="hand-holding-usd"
                                            className="color-prime me-2"
                                        />
                                        Price:{" "}
                                    </span>
                                    <h3 className="color-special">
                                        <span className="color-prime">{item?.price}M $</span>
                                    </h3>
                                </div>
                                <div className="left ms-2">
                                    <span>
                                        <MDBIcon
                                            fas
                                            icon="shopping-cart "
                                            className="color-prime me-2"
                                        />
                                        Sold:{" "}
                                    </span>
                                    <h3 className="color-special">
                                        <span className="color-prime">{item?.sold} </span>CARS SOLD
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-100">
                    <MDBBtn className="rounded-pill" outline color="danger" onClick={() => {
                        navigate('/manageinventory')
                    }}>Manage Inventory</MDBBtn>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
