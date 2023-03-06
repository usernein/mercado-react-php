import ProductsList from 'components/ProductsList';
import React, { useContext } from 'react'
import AppContext from 'store/AppContext';
import { StyledInventoryView } from './InventoryView.style';


function InventoryView (props) {
    const { products } = useContext(AppContext);

    return (
        <StyledInventoryView>
            <ProductsList products={products} />
        </StyledInventoryView>
    );
}

export default InventoryView;