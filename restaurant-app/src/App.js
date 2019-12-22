import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faList,faHome ,faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
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
              <Nav.Link href="#home"><Link to="/"> <FontAwesomeIcon icon={faHome} /> Home  </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"> <FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search </Link></Nav.Link>
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
        <Route path="/update/:id"
        render={props=>(
      <RestaurantUpdate {...props} />
        )}
        >
          
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
