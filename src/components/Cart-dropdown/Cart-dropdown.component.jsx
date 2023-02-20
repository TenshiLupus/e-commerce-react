import {useContext} from 'react';
import {CartContext} from '../../Contexts/Cart.context';

import Button from '../Button/Button.component';
import CartItem from '../cart-item/CartItem.component';
import './Cart-dropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown; 