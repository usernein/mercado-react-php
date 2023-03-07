import SaleProductRow from 'components/SaleProductRow';
import React from 'react'
import { StyledSaleProductsList } from './SaleProductsList.style';

function SaleProductsList ({products}) {
    return (
        <StyledSaleProductsList>
            {products.map((p) => {
                return (
                    <SaleProductRow product={p} saleItem={saleItem} />
                );
            })}
        </StyledSaleProductsList>
    );
}

export default SaleProductsList;