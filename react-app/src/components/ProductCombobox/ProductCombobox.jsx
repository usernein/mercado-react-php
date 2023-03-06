import { Combobox } from "@headlessui/react";
import React, { useState } from "react";
import {
    StyledComboboxInput,
    StyledComboboxOptionItem,
    StyledComboboxOptionList,
} from "./ProductCombobox.style";

function ProductCombobox(props) {
    const [inputFocused, setInputFocused] = useState(false);
    return (
        <Combobox value={props.defaultValue} onChange={props.onChange}>
            {({ open }) => (
                <>
                    {(open || inputFocused) && (
                        <Combobox.Options as={StyledComboboxOptionList} static>
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
                    )}
                    <Combobox.Input
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        onChange={props.onInputChange}
                        as={StyledComboboxInput}
                        placeholder="Produto"
                    />
                </>
            )}
        </Combobox>
    );
}

export default ProductCombobox;
