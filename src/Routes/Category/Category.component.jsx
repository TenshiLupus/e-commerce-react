//To acces the new parameter in the path, we need to import useParams
//We want to isolate heavy tasks from rerendering if necessary, hence why useEffect is useful, only rerendering when the state of its realted values changes
import {useParams} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../Components/Product-card/Product-card.component';


import { CategoriesContext } from '../../Contexts/Products.context';

import './Category.styles.scss';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className="category-container">
            {/* If we have components that rely on asynchrnously fetched code we will need to put in some kind of safeguard so that we only render our components if the actual data is present */}
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product }/>)
            } 
        </div>
    )
}

export default Category;