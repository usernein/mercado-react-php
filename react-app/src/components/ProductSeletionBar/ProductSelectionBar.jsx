import React, { useState, useContext } from "react";
import { StyledSelectionBar } from "./ProductSelectionBar.style";
import QuantityInput from "components/QuantityInput";
import ProductActionsBar from "components/ProductActionsBar/ProductActionsBar";
import ProductCombobox from "components/ProductCombobox/ProductCombobox";
import AppContext from "store/AppContext";

const ProductSelectionBar = (props) => {
    const { products } = useContext(AppContext);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState(1);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

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
