import {createContext, useReducer} from 'react';
import {createAction} from '/utils/reducer/reducer.utils'

//In react, components receive individual props items
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    //cart items with all their corresponding attributes represented as objects. Initiate quantity at 1 if no items with same id found
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem);
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}, 

    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart : () => {},
    cartTotal: 0,
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

// state gets implicitly passed in into the reducer
const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS: 

            return {
                ...state,
                // The new values that we want to store
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN: 

            return {
                ...state,
                // The new values that we want to store
                isCartOpen: payload
            }
        default: 
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({children}) => {

    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    
    
    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); 
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount})
        );
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };
    
    const clearItemFromCart = (cartItemToRemove) => {
        const newCartItems = clearCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
    )};


    //These properties are beig exposed by the value field
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}