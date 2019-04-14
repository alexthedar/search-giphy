/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
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
    // let routes = (
    //   <Switch>
    //     <Route path="/random" component={asyncStockDetail} />
    //     <Route path="/trending" component={asyncStockDetail} />
    //     <Route path="/search/:text" component={asyncStockDetail} />
    //     <Route exact path="/" component={Home} />
    //     <Redirect to="/" to="trending" />
    //   </Switch>
    // );

    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    giphyTrending: text => dispatch(actions.getGiphyTrending(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);

// export default App;

// /* eslint-disable */
// import React, { Component } from "react";
// import { Route, Switch, withRouter, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import Layout from "./hoc/Layout";
// import asyncComponent from "./hoc/asyncComponent";
// import MarketTable from "./containers/market";
// import * as actions from "./store/actions/index";

// const asyncStockDetail = asyncComponent(() => {
//   return import("./containers/stock-detail");
// });

// class App extends Component {
//   componentDidMount() {
//     const { getRefSymbols } = this.props;
//     getRefSymbols();
//   }
//   render() {
//     let routes = (
//       <Switch>
//         <Route path="/stock/:symbol" component={asyncStockDetail} />
//         <Route exact path="/" component={MarketTable} />
//         <Redirect to="/" />
//       </Switch>
//     );

//     return (
//       <div>
//         <Layout>{routes}</Layout>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     getRefSymbols: () => dispatch(actions.getRefSymbols())
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(withRouter(App));
