import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils'


const signIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>;
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}

export default signIn