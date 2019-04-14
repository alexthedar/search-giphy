/* eslint-disable */
import React, { Component } from "react";
import "./App.css";
import GphApiClient from "giphy-js-sdk-core";
import {
  Image,
  Col,
  Row,
  Card,
  CardColumns,
  CardDeck,
  CardGroup,
  Jumbotron
} from "react-bootstrap";

import { Layout } from "./hoc/Layout";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const client = GphApiClient(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      searchText: "",
      selected: null
    };

    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(url) {
    this.setState({
      selected: url
    });
  }

  render() {
    const { gifs, selected } = this.state;
    const selectImage = selected ? (
      <Image style={{ display: "flex", margin: "auto", padding: '1rem' }} src={selected} fluid />
    ) : null;
    return (
      <Layout>
        <div>
          <input type="text" onChange={e => this.handleChange(e)} />
          <button type="submit" onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </div>
        {selectImage}
        <CardColumns>
          {gifs.map(gif => {
            return (
              <Card
                key={gif.id}
                border="light"
                body={false}
                onClick={() => this.handleSelect(gif.images.original.url)}
              >
                <Card.Img
                  src={gif.images.fixed_height_downsampled.url}
                  alt=""
                  variant="top"
                />
              </Card>
            );
          })}
        </CardColumns>
      </Layout>
    );
  }
}

export default App;
