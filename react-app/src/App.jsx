import * as React from "react";
import { useState } from "react";
import BottomNavigationBar from "components/BottomNavigationBar/BottomNavigationBar";

import { StyledApp, StyledContent } from "./App.style";
import AppContextProvider from "store/AppContextProvider";
import SaleProductsView from "components/SaleProductsView";
import InventoryView from "components/InventoryView";
import SalesView from "components/SalesView";

function App() {
    const [Page, setPage] = useState("buy");

    return (
        <AppContextProvider>
            <StyledApp>
                <StyledContent>
                    {Page === "inventory" && <InventoryView />}
                    {Page === "buy" && <SaleProductsView />}
                    {Page === "sale" && <SalesView />}
                </StyledContent>

                <BottomNavigationBar page={Page} setPage={setPage} />
            </StyledApp>
        </AppContextProvider>
    );
}

export default App;
