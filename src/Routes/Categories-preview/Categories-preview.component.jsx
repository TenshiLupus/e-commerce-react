import {Link} from 'react-router-dom';
import { useContext, Fragment} from "react";
import { CategoriesContext } from "../../Contexts/Products.context";
import CategoryPreview from "../../Components/category-preview/category-preview.component";


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