import {Fragment, useContext} from 'react';
import {Outlet} from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../Assets/crown.svg';

import { UserContext } from '../../Contexts/User.context';
import { CartContext } from '../../Contexts/Cart.context';

import {signOutUser} from '../../Utils/Firebase/Firebase.utils';

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './Navigation.styles';

import CartIcon from '../../Components/cart-icon/Cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/Cart-dropdown.component'

//base component functionality is being inherited from the styled-components inported in the styles file. Hence the ability to treat the styled components as normal components
const Navigation = () => {
    //We are passing in functions to all the components wrapped by the context
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className='logo'/>
            </LogoContainer>

            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? 
                    (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : 
                    (<NavLink to='/auth'>Sign in</NavLink>)
                }

                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}


export default Navigation