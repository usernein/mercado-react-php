import React from "react";
import AppContext from "store/AppContext";
import {
    CategoryTaxPercentageInput,
    StyledCategoryNameRow,
} from "./CategoryNameRow.style";

function CategoryNameRow({ category }) {
    const { updateCategory } = React.useContext(AppContext);
    const [percentage, setPercentage] = React.useState(category.tax_percentage);

    const updateTax = (e) => {
        category.tax_percentage = parseFloat(percentage);
        updateCategory(category, ["tax_percentage"]);
    };

    return (
        <StyledCategoryNameRow>
            <div>{category.name}</div>
            <div className="flex ml-auto mr-20">
                <CategoryTaxPercentageInput
                    type="text"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            updateTax(e);
                        }
                    }}
                />
                <span>% de impostos</span>
            </div>
        </StyledCategoryNameRow>
    );
}

export default CategoryNameRow;
