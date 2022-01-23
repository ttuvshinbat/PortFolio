import React, { useState } from "react"
import { Container, NavDropdown, Navbar, Nav, Button, NavLink } from 'react-bootstrap'
import pictures from "../json/naturals.json"

const NavbarMenu = () => {
    // <NavDropdown.Item href={data.picture} >
    //     <Nav.Link href={data.picture} >
    //         {data.name}
    //     </Nav.Link>

    // </NavDropdown.Item>
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" className='position-3 fs-3 fw-bold'>
                <Container className="box-size-4">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Nature Pictures" id="collasible-nav-dropdown">
                                {pictures.map(data => {
                                    return (

                                        <NavLink href={data.picture} to={data.picture} >
                                            {data.name}
                                        </NavLink>


                                    )
                                })}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <input className="btn fw-bold fs-3" type="button" value="Theme" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
export default NavbarMenu;