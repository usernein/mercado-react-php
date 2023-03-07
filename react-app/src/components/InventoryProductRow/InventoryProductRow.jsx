//@ts-check
import React from "react";
import {
    StyledInventoryProductRow,
    StyledProductName,
    StyledProductPrice,
    StyledProductTaxedPrice,
} from "./InventoryProductRow.style";

function InventoryProductRow(props) {
    return (
        <StyledInventoryProductRow>
            <StyledProductName>{props.product.name}</StyledProductName>
            <StyledProductPrice>R$ {props.product.price}</StyledProductPrice>
            <StyledProductTaxedPrice>
                R${" "}
                {Number(props.product.price) +
                    Number(props.product.price) * Number(props.product.category.tax_percentage)}
            </StyledProductTaxedPrice>
        </StyledInventoryProductRow>
    );
}

export default InventoryProductRow;
