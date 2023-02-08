   
import './App.css';
import Header from './Header'
import Home from './Home'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './auth/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider"
import Checkout from './Checkout';
function App() {
  const [{user}, dispatch] = useStateValue();
    useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log("THE USER IS", authUser);
      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
       
      } else {
        // the user is looged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
 <div className='app'>
    <Router>
    <Header />
       <Routes>
       <Route  path="/checkout" element={<Checkout />} />
       <Route  path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      </Routes>
  </Router>
 </div>

 
    
  );
}

export default App;
