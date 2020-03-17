import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarManu from './NavBarManu'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }
                else {
                    alert("Pelase check username and password")
                }

            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <input type="text"
                    placeholder="enter name"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                <input
                    placeholder="enter password"
                    type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                <button onClick={() => { this.login() }} >Login</button>

            </div>
        );
    }
}

export default Login;