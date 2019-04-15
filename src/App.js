import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./hoc/Layout";
import * as actions from "./store/actions/index";
import Home from "./containers/Home";

class App extends Component {
  componentDidMount() {
    const { giphyTrending } = this.props;
    giphyTrending('gifs');
  }

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    giphyTrending: type => dispatch(actions.getGiphyTrending(type)),
    giphySearch: (text, type) => dispatch(actions.getGiphySearch(text, type))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
