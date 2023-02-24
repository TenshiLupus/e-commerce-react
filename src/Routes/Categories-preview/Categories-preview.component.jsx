import { useContext, Fragment} from "react";
import { CategoriesContext } from "../../Contexts/Products.context";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

import ProductCard from "../../Components/Product-card/Product-card.component";


const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            })}
        </Fragment>
    );
}

export default CategoriesPreview;