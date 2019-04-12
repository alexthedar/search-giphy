import React from "react";
// import { connect } from "react-redux";
// import { Navbar, Container, Nav, Spinner, Alert } from "react-bootstrap";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl
} from "react-bootstrap";
import SearchForm from "../components/SearchForm";
// import SearchForm from "../components/Search";

// const generateAppContents = props => {
//   const { error, isFetching } = props;

//   if (error) {
//     return (
//       <Alert dismissible variant="danger">
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>
//           <strong>Error Message: </strong>
//           {error}
//         </p>
//         <p>Please try refreshing the page.</p>
//       </Alert>
//     );
//   } else if (isFetching) {
//     return (
//       <Spinner animation="border" role="status">
//         <span className="sr-only">Loading...</span>
//       </Spinner>
//     );
//   }

//   return props.children;
// };

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
        {/* <Container>{generateAppContents(props)}</Container> */}
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};

// export function mapStateToProps(state) {
//   const { error, isFetching } = state.app;
//   return { error, isFetching };
// }

// export default connect(
//   mapStateToProps,
//   null
// )(Layout);
export default Layout;
