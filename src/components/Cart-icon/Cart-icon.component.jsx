import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-icon.styles.scss';
import {CartContext} from '../../Contexts/Cart.context';
import {useContext} from 'react';


const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
           <ShoppingIcon className='shopping-icon'/>
           <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;