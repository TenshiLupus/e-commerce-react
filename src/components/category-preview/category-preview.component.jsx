import {Link} from 'react-router-dom';

//Link component can be used as a href to the other route we want to head to. The link will be a relative route and therefore will be child to the current component

import ProductCard from '../Product-card/Product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({title, products}) => {
    return(
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                    
                }
            </div>
        </div>


    )
}

export default CategoryPreview