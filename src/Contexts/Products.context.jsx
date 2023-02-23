import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../Utils/Firebase/Firebase.utils.js";

//We are initializing the product context with this line
//Here is where we will store the prodcts 
export const ProductsContext = createContext({
    products: [],
});

//For any context we need the context value and provider itself
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    //Fires only when the provider gets mounted
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }

        getCategoriesMap();
    }, [])
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}