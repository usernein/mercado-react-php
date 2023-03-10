import CategoryNameRow from "components/CategoryNameRow";
import InventoryProductsList from "components/InventoryProductsList";
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledInventoryView } from "./InventoryView.style";

function InventoryView(props) {
    const { products, categories, arrayGroupBy } = useContext(AppContext);
    const groupedProducts = arrayGroupBy(
        products,
        (product) => product.category.id
    );

    return (
        <StyledInventoryView>
            {Object.keys(groupedProducts).map((categoryId) => {
                const category = categories.find(
                    (c) => Number(c.id) === Number(categoryId)
                );

                return (
                    <div key={categoryId+"div"}>
                        <CategoryNameRow
                            key={categoryId + "_title"}
                            category={category}
                        />
                        <InventoryProductsList
                            key={categoryId + "_list"}
                            products={groupedProducts[categoryId]}
                        />
                    </div>
                );
            })}
        </StyledInventoryView>
    );
}

export default InventoryView;
