import {Fragment, useContext} from 'react';
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../Components/Cart-icon/Cart-icon.component'
import CartDropdown from '../../Components/Cart-dropdown/Cart-dropdown.component'

import {ReactComponent as CrownLogo} from '../../Assets/crown.svg';

import { UserContext } from '../../Contexts/User.context';
import { CartContext } from '../../Contexts/Cart.context';

import {signOutUser} from '../../Utils/Firebase/Firebase.utils';

import {NavigationContainer} from './Navigation.styles';

const Navigation = () => {
    //We are passing in functions to all the components wrapped by the context
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <div className='navigation'>
            {/* <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? 
                    (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) : 
                    (<Link className='nav-link' to='/auth'>Sign in</Link>)
                }

                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown />} */}
        </div>
        <Outlet/>
      </Fragment>
    )
}


export default Navigation