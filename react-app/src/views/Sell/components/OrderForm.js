import React, { useState, useEffect } from "react";
import { localMarketBaseUrl } from "./config/api";
import axios from "axios";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Form,
    Select,
    TextField,
    Button,
} from "@material-ui/core";

function OrderForm() {
    const [productList, setProductList] = useState([]);
    const [orderList, setOrderList] = useState({});

    const fetchProductList = async () => {
        const response = await axios.get(localMarketBaseUrl+"/products");
        setProductList(response.data);
    }
    useEffect(() => {
        fetchProductList();
    })

    const addNewProduct = (productId) => {
        setOrderList({ ...orderList, [productId]: 1 });
    }
    return (
        <>
            <Form>
                <FormGroup controlId="formSelection">
                    <FormLabel>Select Products</FormLabel>
                    <FormControl
                        as="select"
                        onChange={(e) => addNewProduct(e.target.value)}
                    >
                        {productList.map((product) => (
                            <option value={product.id}>{product.name}</option>
                        ))}
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="formQuantity">
                    <FormLabel>Enter Quantity</FormLabel>
                    <FormControl
                        type="number"
                        value={1}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </FormGroup>
            </Form>

            <Button onClick={handleSubmit}>Submit Order</Button>
        </>
    );
}

export default OrderForm;
