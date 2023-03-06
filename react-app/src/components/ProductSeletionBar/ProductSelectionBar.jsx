import React, { useState, useEffect } from "react";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import { StyledSelectionBar } from "./ProductSelectionBar.style";
import QuantityInput from "components/QuantityInput";
import ProductActionsBar from "components/ProductActionsBar/ProductActionsBar";
import ProductCombobox from "components/ProductCombobox/ProductCombobox";

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

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <StyledSelectionBar>
            <ProductCombobox
                products={filteredProducts}
                defaultValue={selectedProduct}
                onChange={setSelectedProduct}
                onInputChange={(e) => setInputValue(e.target.value)}
            />
            <QuantityInput value={quantity} setQuantity={setQuantity} />
            <ProductActionsBar />
        </StyledSelectionBar>
    );
};

export default ProductSelectionBar;
