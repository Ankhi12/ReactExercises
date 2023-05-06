
import NavbarComp from "./Components/Navbar";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import PrivateRoute from "./Components/PrivateRoute";
function App(props) {
  return(
    <div>
      <NavbarComp/> 
        <Switch>
          <Route path="/register" exact={true}><Register/></Route>
          <Route path="/login" component={Login} exact={true}/>
          <PrivateRoute path="/Home" comp={Home} exact={true}/>
        </Switch>
    </div>
  )
}
export default App;
