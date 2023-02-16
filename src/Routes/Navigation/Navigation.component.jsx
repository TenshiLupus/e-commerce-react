import {Fragment, useContext} from 'react';
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../Assets/crown.svg';
import { UserContext } from '../../Contexts/User.context';

import {signOutUser} from '../../Utils/Firebase/Firebase.utils';

import './Navigation.styles.scss'

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
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
                
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}


export default Navigation