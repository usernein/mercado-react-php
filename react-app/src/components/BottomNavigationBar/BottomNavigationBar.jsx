import React from "react";
import { BiHistory, BiMoney, BiPackage } from "react-icons/bi";

import { Tab } from "@headlessui/react";
import { StyledBottomBar, StyledNavigationBar, StyledTab } from "./BottomNavigationBar.style";
import ProductSelectionBar from "components/ProductSeletionBar/ProductSelectionBar";

function BottomNavigationBar(props) {
    const onTabChange = (index) => {
        let pages = ["inventory", "buy", "sales"];
        props.setPage(pages[index]);
    }
    return (
        <StyledBottomBar>
            {props.page === "buy" && (
                <ProductSelectionBar page="sell" quantity={0} />
            )}

            <Tab.Group defaultIndex={1} onChange={onTabChange}>
                <Tab.List as={StyledNavigationBar}>
                    <Tab as={StyledTab}>Inventário<BiPackage className="ml-1"/></Tab>
                    <Tab as={StyledTab}>Comprar<BiMoney className="ml-1"/> </Tab>
                    <Tab as={StyledTab}>Vendas<BiHistory className="ml-1"/> </Tab>
                </Tab.List>
            </Tab.Group>
        </StyledBottomBar>
    );
}

export default BottomNavigationBar;
