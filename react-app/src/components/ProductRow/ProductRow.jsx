import ProductActionsBar from 'components/ProductActionsBar';
import QuantityInput from 'components/QuantityInput';
import React from 'react'
import { ProductName, StyledProductRow } from './ProductRow.style';

function ProductRow (props) {
    return (
        <StyledProductRow>
            <ProductName>{props.product.name}</ProductName>
            <QuantityInput value={props.saleInfo? props.saleInfo.amount : 0} />
            <ProductActionsBar actions="delete" />
        </StyledProductRow>
    );
}

export default ProductRow;