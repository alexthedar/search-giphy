import React, { Component } from "react";
import "./App.css";
import GphApiClient from "giphy-js-sdk-core";
import { Image, Col, Row } from "react-bootstrap";

import { Layout } from "./hoc/Layout";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const client = GphApiClient(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      searchText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.searchGifs("cats");
  }

  searchGifs(text) {
    client
      .search("gifs", { q: text, lang: "en" })
      .then(response => {
        this.setState({
          gifs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit() {
    const { searchText } = this.state;
    this.searchGifs(searchText);
  }

  render() {
    const { gifs } = this.state;
    console.log(gifs);
    return (
      <Layout>
        <input type="text" onChange={e => this.handleChange(e)} />
        <button type="submit" onClick={() => this.handleSubmit()}>
          Submit
        </button>
        <Row>
          {gifs.map(gif => {
            return (
              <Image
                key={gif.id}
                src={gif.images.fixed_width_small_still.url}
                alt=""
                rounded
              />
            );
          })}
        </Row>
      </Layout>
    );
  }
}

export default App;
