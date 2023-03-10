import React, { useContext } from "react";
import { BiHistory, BiMoney, BiPackage } from "react-icons/bi";

import { Tab } from "@headlessui/react";
import {
    StyledBottomBar,
    StyledNavigationBar,
    StyledTab,
} from "./BottomNavigationBar.style";
import ProductSelectionBar from "components/ProductSeletionBar/ProductSelectionBar";
import { PageContext } from "store/PageContext";

function BottomNavigationBar(props) {
    let pages = ["inventory", "buy", "sales"];
    const { pageTitle } = useContext(PageContext);

    const onTabChange = (index) => {
        props.setPage(pages[index]);
    };
    return (
        <StyledBottomBar>
            {props.page === "buy" && (
                <ProductSelectionBar page="sell" quantity={0} />
            )}

            <Tab.Group
                selectedIndex={pages.indexOf(props.page)}
                onChange={onTabChange}
            >
                <Tab.List as={StyledNavigationBar}>
                    <Tab as={StyledTab}>
                        {/* {(selected) =>
                            selected ? <>{pageTitle}</> : <div>Inventário</div>
                        } */}
                        Inventário
                        <BiPackage className="ml-1" />
                    </Tab>
                    <Tab as={StyledTab}>
                        Comprar
                        <BiMoney className="ml-1" />{" "}
                    </Tab>
                    <Tab as={StyledTab}>
                        Vendas
                        <BiHistory className="ml-1" />{" "}
                    </Tab>
                </Tab.List>
            </Tab.Group>
        </StyledBottomBar>
    );
}

export default BottomNavigationBar;
