import React from "react";
import { BiHistory, BiMoney, BiPackage } from "react-icons/bi";

import { Tab } from "@headlessui/react";
import { StyledBottomBar, StyledNavigationBar, StyledTab } from "./BottomNavigationBar.style";
import ProductSelectionBar from "components/ProductSeletionBar/ProductSelectionBar";

function BottomNavigationBar(props) {
    return (
        <StyledBottomBar>
            {props.page === "vender" && (
                <ProductSelectionBar page="sell" quantity={0} />
            )}

            <Tab.Group defaultIndex={1}>
                <Tab.List as={StyledNavigationBar}>
                    <Tab as={StyledTab}>Catálogo<BiPackage className="ml-1"/></Tab>
                    <Tab as={StyledTab}>Venda<BiMoney className="ml-1"/> </Tab>
                    <Tab as={StyledTab}>Registros<BiHistory className="ml-1"/> </Tab>
                </Tab.List>
            </Tab.Group>
        </StyledBottomBar>
    );
}

export default BottomNavigationBar;
