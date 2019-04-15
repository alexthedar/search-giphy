import React from "react";
import { connect } from "react-redux";
import { Navbar, Container, Spinner, Alert } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import * as actions from "../store/actions/index";

const generateAppContents = props => {
  const { error, loading } = props;
  if (error) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        {error.message ? (
          <p>
            <strong>Error Message: </strong>
            {error}
          </p>
        ) : null}

        <p>Please try refreshing the page.</p>
      </Alert>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center"
        }}
      >
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return props.children;
};

export const Layout = props => {
  function handleClick(e) {
    e.preventDefault();
    const { giphyTrending, giphyType } = props;
    giphyTrending(giphyType);
  }

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand onClick={e => handleClick(e)}>Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <SearchForm />
        </Navbar.Collapse>
      </Navbar>
      <main style={{ paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
        <Container>{generateAppContents(props)}</Container>
      </main>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    giphyTrending: type => dispatch(actions.getGiphyTrending(type))
  };
};

export function mapStateToProps(state) {
  const { error, loading } = state.app;

  const { giphyType } = state.giphy;
  return { giphyType, error, loading };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
