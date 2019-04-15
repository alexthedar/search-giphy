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
    const { giphyTrending, giphySearch } = this.props;
    giphyTrending();
    giphySearch();
  }

  componentDidUpdate(prevProp) {
    const {
      location: { pathname }
    } = this.props;
    if (pathname !== prevProp.location.pathname) {
      console.log("here");
    }
    console.log(pathname);
    console.log(this.props);
    console.log(prevProp);
  }

  render() {
    let routes = (
      <Switch>
        {/* <Route path="stickers" component={Home} />
        <Route path="stickers/search/:searchText" component={Home} /> */}
        <Route path="gifs" component={Home} />
        <Route path="gifs/search/:searchText" component={Home} />
        <Route exact path="/" component={Home} />
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
