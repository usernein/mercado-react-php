import InventoryProductRow from 'components/InventoryProductRow';
import React from 'react'
import { StyledInventoryProductList } from './InventoryProductList.style';

function InventoryProductList ({products}) {
    return (
        <StyledInventoryProductList>
            {products.map((p) => (
                <InventoryProductRow product={p} />
            ))}
        </StyledInventoryProductList>
    );
}

export default InventoryProductList;