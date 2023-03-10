import SaleProductRow from "components/SaleProductRow";
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledSaleProductsList } from "./SaleProductsList.style";

function SaleProductsList({ saleId, products, sale }) {
    const { products: contextProducts } = useContext(AppContext);
    return (
        <StyledSaleProductsList>
            {contextProducts.map((p) => {
                const saleItem = sale.products.find(
                    (sp) => sp.product_id === p.id
                );
                if (saleItem) {
                    return (
                        <SaleProductRow
                            key={p.id}
                            product={p}
                            saleItem={saleItem}
                        />
                    );
                }
                return null;
            })}
        </StyledSaleProductsList>
    );
}

export default SaleProductsList;
