import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component'
import Checkout from './routes/checkout/Checkout.component';

import { onAuthStateChangedListener, createUserDocumentFromAuth} from './utils/Firebase/Firebase.utils'
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

//Context is utilized to allow any component to access the information of an object from anywhere in the Dom tree without having to create a data flow traffic
//Routes need to be children of the routes component to access the subcomponents
//Context will make it so all components listening ton a hook whose state changes, will update those same components
//Hook should just be considered as just another glorified hooked connected to another component
//Hooking into Context from diifferent ocmpoennts may draw down the performance of an application.
/*
  Observer pattern together with a streams needs to be subscribed, and may subscribe asyschronously to the stream
  A stream can have any number of listeners
    LISTENER
  next: Do something with the next value
  error: Do something with and error
  complete: Do something when finished
  
*/
//If a react compoennt receives the same object with te value mutated, react does not register that the object is different 
//Styling issues may arise when styling with SASS, like certain classes overriding others unintentionally

//Reducers: They only store read-only values
//UseEffect: side effect that happens when a value in the dependencies changes, else globally.
//A Good time to use reducers is when one update needs to modify multiple values

//Contexts will initialize with an initial value, however. We will not be able to access its updated values if it is not withing the reachability of the host component
//For scaling of the application, perhaps it is preferable to wrap a parent component with a wider reachabaility.

//Redux: single source of truth, the place where all state is expected to reside, ie redux store
//Redux has its own provider that we can use and wrapa around the application to reach data that we stored.
//useDispatch: is what we get back from react redux  
//whenever we update one of our reducer values we always retrieve a new state object.
//A reducer will always sotre the most basic format of a reducer
//A selector will the ncovert that data into the format that we want

//Create an action => dispatch 
//thunks allow actions to be passed as functions

const App = () => {
  //Dispatch the function to the root reducers which in turn dispatchers it to all reducers whithin it
  //hooks are expected to change, but useDispatch does not change
  const dispatch = useDispatch();

  useEffect(() => {
    //the authentication listenever will return us a function that will be utilized to stop listening
    //The listener makes it so all the authentication logic will now reside within the UserContext, aside from the signup
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
}, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
