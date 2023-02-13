import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import {auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils'


const SignIn = () => {

    //On the mount of the component the result of the redirect will be stored in a response
    useEffect( async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
            
        }

    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>;
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            
        </div>
    );
}

export default SignIn