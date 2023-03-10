import React, { useState, useContext } from "react";
import {
    StyledSelectionBar,
    StyledSelectionRow,
} from "./ProductSelectionBar.style";
import QuantityInput from "components/QuantityInput";
import ProductActionsBar from "components/ProductActionsBar/ProductActionsBar";
import ProductCombobox from "components/ProductCombobox/ProductCombobox";
import AppContext from "store/AppContext";
import SmallSaleInfo from "components/SmallSaleInfo";

const ProductSelectionBar = (props) => {
    const {
        products,
        sales,
        currentSaleId,
        calculateSalePrices,
        getSaleById,
        updateSale,
        createNewSale,
        updateSaleItem,
    } = useContext(AppContext);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState(1);

    const currentSale = sales.find((s) => s.id === currentSaleId);

    // filter out items that are already added, it would mess up the database
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().startsWith(inputValue.toLowerCase()) &&
            (!currentSale ||
                !currentSale.products.find((p) => p.id === product.id))
    );
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

    const onSubmit = () => {
        const product_name = selectedProduct;
        const product = filteredProducts.find(
            (product) => product.name === product_name
        );
        if (!product) {
            alert("Falha ao adicionar produto");
            return;
        }
        const amount = quantity;

        if (!currentSaleId) {
            createNewSale({ id: product.id, amount });
        } else {
            updateSaleItem({ id: product.id, amount }, true);
        }

        const { taxes, total } = calculateSalePrices(currentSaleId);
        const sale = getSaleById(currentSaleId);
        sale.taxes_price = taxes;
        sale.total_price = total;
        updateSale(sale, ["taxes_price", "total_price"]);
    };

    const onDelete = (e) => {
        setInputValue("");
        setSelectedProduct("");
        setQuantity(1);
    };

    return (
        <StyledSelectionBar>
            {currentSaleId ? <SmallSaleInfo saleId={currentSaleId} /> : null}
            <StyledSelectionRow>
                <ProductCombobox
                    products={filteredProducts}
                    defaultValue={selectedProduct}
                    onChange={setSelectedProduct}
                    onInputChange={(e) => setInputValue(e.target.value)}
                />
                <QuantityInput value={quantity} setQuantity={setQuantity} />
                <ProductActionsBar onSubmit={onSubmit} onDelete={onDelete} />
            </StyledSelectionRow>
        </StyledSelectionBar>
    );
};

export default ProductSelectionBar;
