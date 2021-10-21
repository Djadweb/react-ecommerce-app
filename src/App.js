import './scss/App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useStateValue} from './StateProvider';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import {auth} from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const [{user}, dispatch] = useStateValue();
  const promise = loadStripe("pk_test_51H2iodHM07sQouFVMwkZjWuyNxQNRsck4L9ffl8jrDh5OYe4CzPHnEbtCYpKCzgn2NanVZL0FU5wHFJWBf5KCEp700Vsj6F9le");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      //Cleanups
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
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
          <Route path="/">
            <Header />
            <Home />            
          </Route>          
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
