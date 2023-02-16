import SignUpForm from '../../Components/Sign-up-form/Sign-up-form.component.jsx'
import SignInForm from '../../Components/Sign-in-form/Sign-in-form.component.jsx'

import './Authentication.styles.scss'

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication