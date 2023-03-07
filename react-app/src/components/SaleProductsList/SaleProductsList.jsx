import SaleProductRow from 'components/SaleProductRow';
import React from 'react'
import { StyledSaleProductsList } from './SaleProductsList.style';

function SaleProductsList ({products, sale}) {
    return (
        <StyledSaleProductsList>
            {products.map((p) => {
                const saleItem = sale.products.find(sp => sp.product_id === p.id);
                return (
                    <SaleProductRow key={p.id} product={p} saleItem={saleItem} />
                );
            })}
        </StyledSaleProductsList>
    );
}

export default SaleProductsList;