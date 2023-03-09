import {combineReducers} from 'redux';

import {userReducer} from './user/user.reducer';
import {categoriesReducer} from './categories/category.reducer';

import { cartReducer } from './cart/cart.reducer';

//whenever the root reducer updates any of the reducer values the entire store object is going to create a new store object
//the useSelector hook is hooked to the redux store therefore whenever the store updates all its values and bound to update aswell
export const rootReducer = combineReducers({
    user: userReducer, 
    categories: categoriesReducer,
    cart: cartReducer,
    
})