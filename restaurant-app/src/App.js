import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from "./components/Home"
import RestaurantUpdate from "./components/RestaurantUpdate"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestauranstList from "./components/RestauranstList"

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/list">
          <RestauranstList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/update">
          <RestaurantUpdate />
        </Route>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App; 
