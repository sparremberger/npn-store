import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// Ali em "Nav className", costumava ser ml e mr-auto pra setar a margem.
// Como estamos usando o bootstrap 5, agora é me e ms. MAS NÃO TEM UMA ÚNICA MENÇÃO DISSO NA DOCUMENTAÇÃO INTEIRAAAAAA

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">NPN Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/carrinho">
                                <i className="fas fa-shopping-cart"></i>Carrinho
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <i className="fas fa-user"></i>Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
