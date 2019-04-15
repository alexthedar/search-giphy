import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import SelectImage from "../components/SelectImage";
import { Card, CardColumns } from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      modalShow: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleSelect(url) {
    this.setState({
      modalShow: true,
      selected: url
    });
  }

  handleHide() {
    this.setState({
      modalShow: false
    });
  }

  render() {
    const {
      searchArray,
      trendingArray,
      match: {
        params: { searchText }
      },
    } = this.props;
    const { selected, modalShow } = this.state;

    const selectImage = selected ? (
      <SelectImage
        selected={selected}
        show={modalShow}
        onHide={this.handleHide}
      />
    ) : null;

    let itemsArr = trendingArray;
    if (searchText) {
      itemsArr = searchArray
    }

    return (
      <React.Fragment>
        {selectImage}
        <CardColumns>
          {itemsArr.map(gif => {
            return (
              <Card
                key={gif.id}
                border="light"
                body={false}
                onClick={() => this.handleSelect(gif.images.original.url)}
              >
                <Card.Img
                  src={gif.images.fixed_height_still.url} //fixed_height_downsampled
                  alt=""
                  variant="top"
                />
              </Card>
            );
          })}
        </CardColumns>
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state) {
  const { searchArray, trendingArray } = state.giphy;
  return { searchArray, trendingArray };
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Home);
