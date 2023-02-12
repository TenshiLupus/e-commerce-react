import {Routes, Route} from 'react-router-dom'
import Home from './components/Routes/Home/Home.component';

//Routes need to be children of the routes component to access the subcomponents
const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
    </div>
  )
}

const Shop = () => {
  return <h1>Im am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  )
}

export default App;
