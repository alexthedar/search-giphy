import React from "react";
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

export const SearchForm = ({
  giphySearch,
  setSearchText,
  giphyTrending,
  giphyType,
  searchText
}) => {

  const handleSubmit = e => {
    e.preventDefault();
    giphySearch(searchText, giphyType);
  };

  const handleToggle = value => {
    if (searchText) {
      giphySearch(searchText, value);
    } else {
      giphyTrending(value);
    }
  };

  return (
    <React.Fragment>
      <Nav className="mr-auto " />
      <Nav className="mr-auto ">
        <ToggleButtonGroup
          type="radio"
          name="types"
          value={giphyType}
          onChange={value => handleToggle(value)}
        >
          <ToggleButton
            name="gifs"
            defaultChecked
            value="gifs"
            variant="outline-light"
          >
            gifs
          </ToggleButton>
          <ToggleButton name="sticker" value="stickers" variant="outline-light">
            stickers
          </ToggleButton>
        </ToggleButtonGroup>
      </Nav>
      <Nav>
        <Form
          style={{ display: "inline-flex", width: "100%" }}
          onSubmit={e => handleSubmit(e)}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-md-2"
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
          />

          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Nav>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    giphySearch: (text, type) => dispatch(actions.getGiphySearch(text, type)),
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
