import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HdvU2BAwpXrV8qJx0LRLCVOrqAuMZ8LEJJr7fRHYZe7CLLFl2DuNN1eka7Wi8klURcbryieEZUk0qjhCFecG05T00qkaOkkqB'
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<< POWERFUL
  // We need a piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* This is the default route, */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
// eslint-disable-next-line
{ 
  /* We NEED React-ROUTER 👇 */ 
}
// eslint-disable-next-line
{ 
  /* localhost.com/ */ 
}
// eslint-disable-next-line
{ 
  /* localhost.com/checkout */ 
}
// eslint-disable-next-line
{ 
  /* localhost.com/login */ 
}

export default App;
