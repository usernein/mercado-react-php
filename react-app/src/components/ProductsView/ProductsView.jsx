import ProductsList from 'components/ProductsList';
import React from 'react'
import { StyledProductsView } from './ProductsView.style';

function ProductsView (props) {

    return (
        <StyledProductsView>
            <ProductsList />
        </StyledProductsView>
    );
}

export default ProductsView;