
import './App.css';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51LAz8HSD3cOCCmPU0qZt8ANj5XHtlQFkgsy7UyPPVNjSksBABoUDHVE5DCIo4zuCh7Zuu4faF1wCNHIfwOi1JYwL00IoLNOLIu');



function App() {
  const [{ user, basket }, dispatch] = useStateValue();
  console.log(user);
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // console.log("th user is >>  ", authUser);
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/payment" >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
