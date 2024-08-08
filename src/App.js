
import React from 'react'
import { BrowserRouter as Router, Route,  Routes }
    from "react-router-dom";
import { Home } from './screens/Home'
import { Login } from './screens/Login';
import { SignUp } from './screens/SignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer.js';
const App = () => {
  return (
    <CartProvider>
  <Router>
    <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        <Route exact path = "/login" element = {<Login/>}></Route>
        <Route exact path = "/createuser" element = {<SignUp/>}></Route>
        
      </Routes>
    </div>
  </Router>
  </CartProvider>
  )
}

export default App
