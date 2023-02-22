import {Routes, Route} from 'react-router-dom';

import Home from './Routes/Home/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Authentication from './Routes/Authenticaiton/Authentication.component';
import Shop from './Routes/Shop/Shop.component'
import Checkout from './Routes/Checkout/Checkout.component';

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
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
