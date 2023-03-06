import React from "react";
import { useGetProductsQuery } from "store/products";
import { StyledProductsList } from "./ProductsList.style";
import { CgSpinner } from "react-icons/cg";
import ProductRow from "components/ProductRow";

function ProductsList(props) {
    const { data, isLoading, isSuccess, error } =
        useGetProductsQuery();

    return (
        <StyledProductsList>
            {isLoading ? (
                <div className="mt-10 animate-spin scale-150"><CgSpinner /></div>
            ) : isSuccess ? (
                data.map((p) => <ProductRow product={p} />)
            ) : (
                error
            )}
        </StyledProductsList>
    );
}

export default ProductsList;
