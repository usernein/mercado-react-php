import * as React from "react";
import { useState } from "react";
import Products from "views/Products";
import Sell from "views/Sell";
import History from "views/History";
import BottomNavigationBar from "components/BottomNavigationBar/BottomNavigationBar";

import StyledApp from "./App.style";

function App() {
    const [Page, setPage] = useState("vender");

    return (
        <StyledApp>
            {Page === "produtos" && <Products />}
            {Page === "vender" && <Sell />}
            {Page === "historico" && <History />}

            <BottomNavigationBar page={Page} setPage={setPage} />
        </StyledApp>
    );
}

export default App;
