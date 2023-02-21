import {createContext, useState, useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    console.log("Is this working?")
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    alert("Working?");

    //cart items with all their corresponding attributes represented as objects. Initiate quantity at 1 if no items with same id found
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}, 

    cartItems: [],
    addItemToCart: () => {},
})

export const CartProvider = ({children}) => {

    //This is working
    const [isCartOpen, setIsCartOpen] = useState(false);

    //This is not working
    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    
    //These properties are beig exposed by the value field
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}