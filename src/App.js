import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./hoc/Layout";
import * as actions from "./store/actions/index";
import Home from "./containers/Home";

class App extends Component {
  componentDidMount() {
    const { giphyTrending } = this.props;
    giphyTrending();
  }

  render() {
    let routes = (
      <Switch>

        <Route path="/trending/:type" component={Home} />
        <Route path="/search/:type/:searchText" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        <Redirect from="/" push to="/trending/gifs" />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    giphyTrending: type => dispatch(actions.getGiphyTrending(type)),
    giphySearch: (text, type) => dispatch(actions.getGiphySearch(text, type))
  };
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(App);
