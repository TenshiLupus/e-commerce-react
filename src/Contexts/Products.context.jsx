import { createContext, useState} from "react";

import PRODUCTS from '../shop-data.json';

//We are initializing the product context with this line
//Here is where we will store the prodcts 
export const ProductsContext = createContext({
    products: [],

});

//For any context we need the context value and provider itself
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products}

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}