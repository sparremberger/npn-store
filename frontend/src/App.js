import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
    return (
        <Router>
            <>
                <Header />
                <main className="py-3">
                    <Container>
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/registrar" component={RegisterScreen} />
                        <Route path="/profile" component={ProfileScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/carrinho/:id?" component={CartScreen} />
                        <Route path="/" component={HomeScreen} exact />{" "}
                        {/* Caso contrário qualquer coisa contendo / cai na rota */}
                    </Container>
                </main>

                <Footer />
            </>
        </Router>
    );
};

export default App;
