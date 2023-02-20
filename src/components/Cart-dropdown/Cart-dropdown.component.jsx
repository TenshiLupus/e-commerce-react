import Button from '../Button/Button.component';
import './Cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            <Button>Go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown; 