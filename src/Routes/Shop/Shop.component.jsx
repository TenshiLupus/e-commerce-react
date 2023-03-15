import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import CategoriesPreview from '../categories-preview/Categories-preview.component';
import Category from '../category/Category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';


const Shop = () => {
    const dispatch = useDispatch()

    //Fires only when the provider gets mounted
    //this is now just a regular component that triggers whenever the componenent mounts
    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, []);


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