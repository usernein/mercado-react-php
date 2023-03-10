import { createContext } from 'react'

export const PageContext = createContext({
    page: "",
    setPage: (value) => {},
    pageTitle: "",
    setPageTitle: (value) => {}
});