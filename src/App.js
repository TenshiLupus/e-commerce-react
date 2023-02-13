import {Routes, Route} from 'react-router-dom'

import Home from './Routes/Home/Home.component';
import Navigation from './Routes/Navigation/Navigation.component'
import SignIn from './Routes/Sign-in/Sign-in.component'

//Routes need to be children of the routes component to access the subcomponents

const Shop = () => {
  return <h1>Im am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
