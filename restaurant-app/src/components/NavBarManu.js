import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faList, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class NavBarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/"> <FontAwesomeIcon icon={faHome} /> Home  </Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/list"> <FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search </Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout </Link></Nav.Link>

                                    :
                                    <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login </Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarManu;