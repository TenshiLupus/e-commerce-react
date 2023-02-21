import {useContext} from 'react';
import {CartContext} from '../../Contexts/Cart.context';

import Button from '../Button/Button.component';
import CartItem from '../Cart-item/Cart-item.component';
import './Cart-dropdown.styles.scss';

const CartDropdown = () => {
    //Whenever we use context, We are dragging out the values passed in to the provider 
    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown; 