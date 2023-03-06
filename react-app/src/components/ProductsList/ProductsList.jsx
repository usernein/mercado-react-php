import React from "react";
import { StyledProductsList } from "./ProductsList.style";
import ProductRow from "components/ProductRow";

function ProductsList(props) {
    const getSaleInfo = (p) => {
        return props.sale.products.find(
            (sp) => sp.product_id === p.id
        );
    }
    return (
        <StyledProductsList>
            {props.products.map((p) => {
                const params = props.sale? {saleInfo: getSaleInfo(p)} : {};
                return (
                    <ProductRow key={p.id} product={p} {...params}/>
                );
            })}
        </StyledProductsList>
    );
}

export default ProductsList;
