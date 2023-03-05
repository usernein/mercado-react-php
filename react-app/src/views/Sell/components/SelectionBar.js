import React, { useState, useEffect } from "react";
import { Stack, Autocomplete, styled, Typography, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import QuantitySelection from "./QuantitySelection";
import { lighten } from "@mui/system";

const StyledTypography = styled(Typography)`
    margin: 5px 10px;
    width: 600px;
    color: black;
`;

const StyledTextField = styled(TextField)`
    margin: 5px 10px;
    width: 400px;
    @media (max-width: 650px) {
        width: 250px;
    }
    @media (max-width: 400px) {
        width: 100px;
    }
    color: white;
`;

const useStyles = makeStyles()((theme) => ({
    stack: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    groupHeader: {
        position: "sticky",
        padding: "10px",
        color: theme.palette.primary.main,
        backgroundColor: lighten(theme.palette.primary.main, 0.8),
    },
}));

const SelectionBar = (props) => {
    const [availableItems, setAvailableItems] = useState([]);
    const [itemsCategories, setItemsCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState(1);

    const fetchProductList = async () => {
        let response = await axios.get(localMarketBaseUrl + "/products");
        setAvailableItems(response.data);

        response = await axios.get(localMarketBaseUrl + "/products/categories");
        setItemsCategories(response.data);
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    // Handler Functions
    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantityIfExists = (newProduct) => {
        const existingProductIndex = products.findIndex(
            (product) => product.id === newProduct.id
        );
        if (existingProductIndex) {
            //takes out the existing product, increase the quantity, and add it back to the end of the array
            let existingProduct = products.splice(existingProductIndex, 1)[0];
            existingProduct.quantity =
                existingProduct.quantity + newProduct.quantity;
            products.push(existingProduct);
            return true;
        }
    };

    const handleSubmitProduct = () => {
        const newProduct = {
            id: 0,
            name: inputValue,
            quantity: quantity,
        };

        if (!increaseQuantityIfExists(newProduct)) {
            setProducts([...products, newProduct]);
            setInputValue("");
            setQuantity(1);
        }
    };

    const handleChange = (event) => {
        // Add your logic here to search through the product
        // list and show matches based on the input value.
    };

    const { classes } = useStyles();

    return (
        <>
            <Stack direction="row" className={classes.stack}>
                {props.page === "sell" ? (
                    <Autocomplete
                        options={availableItems.sort((a, b) =>
                            a.category.name.charAt(0).localeCompare(b.category.name.charAt(0))
                        )}
                        groupBy={(option) => option.category.name}
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option) => (
                            <li {...props} key={option.id}>
                                {option.name}
                            </li>
                        )}
                        renderGroup={(params) => (
                            <li {...params} key={params.key}>
                                <div className={classes.groupHeader}>
                                    {params.group}
                                </div>
                                <ul>{params.children}</ul>
                            </li>
                        )}
                        renderInput={(params) => (
                            <StyledTextField
                                {...params}
                                label="Produto"
                                variant="filled"
                            />
                        )}
                    />
                ) : (
                    <StyledTypography
                    >{props.product_name}</StyledTypography>
                )}

                <QuantitySelection
                    handleAddQuantity={handleAddQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    quantity={props.quantity}
                />
            </Stack>
        </>
    );
};

export default SelectionBar;