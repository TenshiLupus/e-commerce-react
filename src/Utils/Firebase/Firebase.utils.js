import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

//Observable listener: 
//firebase is a NoSql database that stores objects as json and formatted according to firebase´s document model

const firebaseConfig = {
    apiKey: "AIzaSyCS8Zj7nz4p4VKESKaL5sRkAleGYX385vI",
    authDomain: "ecommerce-react-ed58a.firebaseapp.com",
    projectId: "ecommerce-react-ed58a",
    storageBucket: "ecommerce-react-ed58a.appspot.com",
    messagingSenderId: "555913690961",
    appId: "1:555913690961:web:fcd4e456b7c779d5945d70"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

//Keeps track of the authentication state of the website, Acts as a singleton
//Authenticaiton is persistent between different sessions, or when refreshed;
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    
    //yields a docuemnt with the user information
    const userDocRef = doc(db, 'users', userAuth.uid);

    //returns a userobject with the stored information
    const userSnapshot = await getDoc(userDocRef); 

    //if the user does not exist creates and store a new user with the authentication
    if(!userSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName,email,createdAt, ...additionalInformation});
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

//Async signout function that takes in the auth singleton
//We are returning the promise of whatever signOut returns back to us
export const signOutUser = async () => await signOut(auth)

//Will call the callback functions whenever the state of the auth singleton changes
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);