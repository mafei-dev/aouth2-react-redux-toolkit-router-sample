import React, {Component, useEffect} from 'react';
import {getUser} from "./service/Header.service";
import {useDispatch} from "react-redux";
import AddNewButton from "../resources/add-new.png";
import {Col, Image} from "react-bootstrap";
import AddItemComponent from "./shop/AddItem.component";

const ShopGridItem = ({name}) => {
    return (
        <>
            <Col xs={6} sm={3} lg={2} md={3}>
                <center>{name}</center>
                <Image src={AddNewButton}
                       className={"img-thumbnail rounded mx-auto d-block"}
                       style={{backgroundColor: "inherit", borderColor: "#abb3bb", cursor: "pointer"}} rounded/>
            </Col>
        </>
    );
}
const BodyComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
    });

    return (
        <>

            <AddItemComponent />
        </>
    );
}
export default BodyComponent;