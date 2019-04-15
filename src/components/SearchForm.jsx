import React, { Component } from "react";
import { connect } from "react-redux";
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
    // const { giphySearch, history, giphyType } = this.props;
    const { giphySearch, giphyType } = this.props;
    const { searchText } = this.state;
    giphySearch(searchText, giphyType);
    // history.push(`/search/${giphyType}/${searchText}`);
  }

  handleToggle(value) {
    const { searchText, giphySearch, giphyTrending } = this.props;
    if (searchText) {
      giphySearch(searchText, value);
    } else {
      giphyTrending(value);
    }
  }

  render() {
    const { searchText } = this.state;
    const { giphyType } = this.props;
    return (
      <React.Fragment>
        <Nav className="mr-auto " />
        <Nav className="mr-auto ">
          <ToggleButtonGroup
            type="radio"
            name="types"
            value={giphyType}
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
    giphySearch: (text, type) => dispatch(actions.getGiphySearch(text, type)),
    setType: giphyType => dispatch(actions.setGiphyType(giphyType)),
    setSearchText: searchText => dispatch(actions.setSearchText(searchText)),
    giphyTrending: type => dispatch(actions.getGiphyTrending(type))
  };
};

export function mapStateToProps(state) {
  const { giphyType, searchText } = state.giphy;
  return { giphyType, searchText };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
