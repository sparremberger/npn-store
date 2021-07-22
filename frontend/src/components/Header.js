import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// Ali em "Nav className", costumava ser ml e mr-auto pra setar a margem.
// Como estamos usando o bootstrap 5, agora é me e ms. MAS NÃO TEM UMA ÚNICA MENÇÃO DISSO NA DOCUMENTAÇÃO INTEIRAAAAAA

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>NPN Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/carrinho">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    Carrinho
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user"></i>Login
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
