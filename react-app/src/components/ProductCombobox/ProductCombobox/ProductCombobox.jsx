import { Combobox } from "@headlessui/react";
import React from "react";
import {
    StyledComboboxInput,
    StyledComboboxOptionItem,
    StyledComboboxOptionList,
} from "./ProductCombobox.style";

function ProductCombobox(props) {
    return (
        <Combobox value={props.defaultValue} onChange={props.onChange}>
            <Combobox.Options as={StyledComboboxOptionList}>
                {props.products.map((product) => (
                    <Combobox.Option
                    key={product.id}
                    value={product.name}
                    as={StyledComboboxOptionItem}
                    >
                        {product.name}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
            <Combobox.Input
                onChange={props.onInputChange}
                as={StyledComboboxInput}
                placeholder="Produto"
            />
        </Combobox>
    );
}

export default ProductCombobox;
