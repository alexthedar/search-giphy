import React from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import SearchForm from "../components/SearchForm";

export const Layout = props => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto " activeKey="random">
            <Nav.Link eventKey="trending" href="/trending">
              Trending
            </Nav.Link>
            <Nav.Link eventKey="random" href="/random">
              Random
            </Nav.Link>
          </Nav>
          <Nav>
            <SearchForm />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main style={{ paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};


export default Layout

