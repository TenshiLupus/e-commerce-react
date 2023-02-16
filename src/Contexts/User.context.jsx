import {createContext, useState, useEffect} from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../Utils/Firebase/Firebase.utils';

//Initialized with an empty state
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    //use Once without having to rerender
    //Will run wathever is returned when it is unmounted
    useEffect(() => {
        //the authentication listenever will return us a function that will be utilized to stop listening
        //The listener makes it so all the authentication logic will now reside within the UserContext, aside from the signup
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}