import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Nav,
  Button,
  Form,
  FormControl,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import * as actions from "../store/actions/index";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { giphySearch, history, giphyType } = this.props;
    const { searchText } = this.state;
    giphySearch(searchText, giphyType);
    history.push(`/search/${giphyType}/${searchText}`);
  }

  handleToggle(value) {
    const { setType } = this.props;
    setType(value);
  }

  render() {
    const { searchText } = this.state;
    return (
      <React.Fragment>
        <Nav className="mr-auto " />
        <Nav className="mr-auto ">
          <ToggleButtonGroup
            type="radio"
            name="types"
            value={this.state.value}
            onChange={this.handleToggle}
          >
            <ToggleButton
              name="gifs"
              defaultChecked
              value="gifs"
              variant="outline-light"
            >
              gifs
            </ToggleButton>
            <ToggleButton
              name="sticker"
              value="stickers"
              variant="outline-light"
            >
              stickers
            </ToggleButton>
          </ToggleButtonGroup>
        </Nav>
        <Nav>
          <Form
            style={{ display: "inline-flex", width: "100%" }}
            onSubmit={e => this.handleSubmit(e)}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-md-2"
              onChange={e => this.handleChange(e)}
              value={searchText}
            />

            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
        </Nav>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    giphySearch: text => dispatch(actions.getGiphySearch(text)),
    setType: giphyType => dispatch(actions.setGiphyType(giphyType))
  };
};

export function mapStateToProps(state) {
  const { giphyType } = state.giphy;
  return { giphyType };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchForm);
