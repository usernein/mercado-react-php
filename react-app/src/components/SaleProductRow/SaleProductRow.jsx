import ProductActionsBar from "components/ProductActionsBar";
import { StyledProductName } from "components/InventoryProductRow/InventoryProductRow.style";
import QuantityInput from "components/QuantityInput";
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledSaleProductRow } from "./SaleProductRow.style";

function SaleProductRow(props) {
    const { getProductById } = useContext(AppContext);
    const product = getProductById(props.saleItem.product_id);

    return (
        <StyledSaleProductRow>
            <StyledProductName>{product.name}</StyledProductName>
            <QuantityInput value={props.saleItem.amount} />
            <ProductActionsBar actions="delete" />
        </StyledSaleProductRow>
    );
}

export default SaleProductRow;
