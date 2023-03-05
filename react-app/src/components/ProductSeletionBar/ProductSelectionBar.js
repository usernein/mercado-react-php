import React, { useState, useEffect } from "react";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import { Combobox } from "@headlessui/react";
import { StyledComboboxInput, StyledSelectionBar } from "./ProductSelectionBar.style";
import QuantityInput from "components/QuantityInput/QuantityInput";

const ProductSelectionBar = (props) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState(1);

    const fetchProductList = async () => {
        let response = await axios.get(localMarketBaseUrl + "/products");
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    return (
        <StyledSelectionBar>
            <Combobox value={selectedProduct} onChange={setSelectedProduct}>
                <Combobox.Input
                    onChange={(e) => setInputValue(e.target.value)}
                    as={StyledComboboxInput}
                    placeholder="Produto"
                />
                <Combobox.Options>
                    {products.map((product) => (
                        <Combobox.Option key={product.id} value={product.name}>
                            {product.name}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
            <QuantityInput />
        </StyledSelectionBar>
    );
};

export default ProductSelectionBar;
