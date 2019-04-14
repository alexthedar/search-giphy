import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormControl } from "react-bootstrap";
import * as actions from "../store/actions/index";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { giphySearch } = this.props;
    const { searchText } = this.state;
    giphySearch(searchText);
  }

  render() {
    const { searchText } = this.state;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    giphySearch: text => dispatch(actions.getGiphySearch(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
