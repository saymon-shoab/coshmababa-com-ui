
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Login from './Components/LoginModel/Login/Login';
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/LoginModel/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser]= useState({})
  const [cart, setCart]= useState()
  return (
    <div className="">
     < UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart }}>
      
      <Router>
       
        <Switch>
          <Route path="/login">
          <Login  />
          </Route>
          <PrivateRoute path="/admin">
          <Admin  />
          </PrivateRoute>
          <PrivateRoute path="/panel/:adminPanel">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
          <Route  path="/">
           <Home />
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
