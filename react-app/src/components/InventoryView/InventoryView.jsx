import InventoryProductsList from "components/InventoryProductsList";
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledInventoryView, StyledCategoryName } from "./InventoryView.style";

function InventoryView(props) {
    const { products, arrayGroupBy } = useContext(AppContext);
    const groupedProducts = arrayGroupBy(
        products,
        (product) => product.category.name
    );

    return (
        <StyledInventoryView>
            {Object.keys(groupedProducts).map((categoryName) => {
                return (
                    <>
                        <StyledCategoryName>{categoryName}</StyledCategoryName>
                        <InventoryProductsList key={categoryName} products={groupedProducts[categoryName]} />
                    </>
                );
            })}
        </StyledInventoryView>
    );
}

export default InventoryView;
