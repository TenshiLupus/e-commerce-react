import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
    //Whenever we use context, We are dragging out the values passed in to the provider 
    const cartItems = useSelector(selectCartItems)
    //allows the user to manually get redirected to another URL
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown; 