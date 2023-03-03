import {createContext, useState, useEffect, useReducer} from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../Utils/Firebase/Firebase.utils';
import {createAction} from '../utils/reducer/reducer.utils'

//Initialized with an empty state
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    
});

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return{
                ...state,
                currentUser: payload
            }
        
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {
   

    // Allows a reducer to receive the state that is being passed in
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

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
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}