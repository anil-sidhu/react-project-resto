import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./components/Home"
import RestaurantUpdate from "./components/RestaurantUpdate"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestauranstList from "./components/RestauranstList"
import Login from './components/Login'
import Protected from './components/Protected'
import Logout from './components/Logout'
function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Route path="/logout">
          <Logout />
        </Route> 
        
        {/*  */}
        <Route path="/login"
        render={props=>(
      <Login {...props} />
        )}
        >
        </Route>
        {/*  */}
        <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/list" component={RestauranstList} />
    
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App; 
