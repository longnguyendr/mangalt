import React, {useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink, withRouter} from 'react-router-dom'

const NavigationBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" fluid='true' collapseOnSelect>
            <NavLink className="navbar-brand" to="/">Mangalt</NavLink>
            <Navbar.Toggle aria-controls="baisc-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </Nav>
                <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(NavigationBar) 