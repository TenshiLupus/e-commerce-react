import SignUpForm from '../../Components/Sign-up-form/Sign-up-form.component';
import SignInForm from '../../Components/Sign-in-form/Sign-in-form.component';

import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;