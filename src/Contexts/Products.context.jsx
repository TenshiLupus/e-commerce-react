import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../Utils/Firebase/Firebase.utils.js";

//We are initializing the product context with this line
//Here is where we will store the prodcts 
export const CategoriesContext = createContext({
    categoriesMap: {},
});

//For any context we need the context value and provider itself
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    //Fires only when the provider gets mounted
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap();
    }, []);


    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}