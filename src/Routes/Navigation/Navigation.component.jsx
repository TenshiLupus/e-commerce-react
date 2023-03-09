import {Fragment} from 'react';
import {Outlet} from "react-router-dom";
//Allows us to interact from a component with the redux store
import {useSelector} from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './Navigation.styles';

import {signOutUser} from '../../utils/Firebase/Firebase.utils';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

//base component functionality is being inherited from the styled-components inported in the styles file. Hence the ability to treat the styled components as normal components
const Navigation = () => {

    //extracts the vcalues that we want from the redux store
    const currentUser = useSelector(selectCurrentUser)

    //We are passing in functions to all the components wrapped by the context
    //think of the selectors as bullets and the useSelector as the trigger 
    const isCartOpen = useSelector(selectIsCartOpen);

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