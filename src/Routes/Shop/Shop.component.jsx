import {Routes, Route} from 'react-router-dom';
import './Shop.styles.scss';
import CategoriesPreview from '../Categories-preview/Categories-preview.component';
import Category from '../Category/Category.component';



const Shop = () => {

    return (
       <Routes>
            <Route index element={<CategoriesPreview/> } />
            {/* Paths can match against an unique parameter  */}
            {/* What we are going to render here is the category component */}
            <Route path=":category" element={<Category/> } />
       </Routes>
    );
};

export default Shop;