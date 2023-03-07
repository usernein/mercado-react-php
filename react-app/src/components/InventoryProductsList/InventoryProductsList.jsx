import InventoryProductRow from 'components/InventoryProductRow';
import React from 'react'
import { StyledInventoryProductsList } from './InventoryProductsList.style';

function InventoryProductsList ({products}) {
    return (
        <StyledInventoryProductsList>
            {products.map((p) => (
                <InventoryProductRow key={p.id} product={p} />
            ))}
        </StyledInventoryProductsList>
    );
}

export default InventoryProductsList;