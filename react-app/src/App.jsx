import * as React from "react";
import { useState } from "react";
import BottomNavigationBar from "components/BottomNavigationBar/BottomNavigationBar";

import { StyledApp, StyledBottom, StyledContent, StyledTop } from "./App.style";
import AppContextProvider from "store/AppContextProvider";
import SaleProductsView from "components/SaleProductsView";
import InventoryView from "components/InventoryView";
import SalesView from "components/SalesView";
import { PageContext } from "store/PageContext";
import TopBar from "components/TopBar";

function App() {
    const [page, setPage] = useState("buy");
    const [pageTitle, setPageTitle] = useState("Welcome!");

    return (
        <PageContext.Provider value={{ page, setPage, pageTitle, setPageTitle }}>
            <AppContextProvider>
                <StyledApp>
                    {/* <StyledTop><TopBar></TopBar></StyledTop> */}

                    <StyledContent>
                        {page === "inventory" && <InventoryView />}
                        {page === "buy" && <SaleProductsView />}
                        {page === "sales" && <SalesView />}
                    </StyledContent>

                    <StyledBottom>
                        <BottomNavigationBar page={page} setPage={setPage} />
                    </StyledBottom>
                </StyledApp>
            </AppContextProvider>
        </PageContext.Provider>
    );
}

export default App;
