import React, { Component } from "react";
import { connect } from "react-redux";
import SelectImage from "../components/SelectImage";
import { Card, CardColumns } from "react-bootstrap";
import * as actions from "../store/actions/index";

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
    const { gifsArray } = this.props;
    const { selected, modalShow } = this.state;

    const selectImage = selected ? (
      <SelectImage
        selected={selected}
        show={modalShow}
        onHide={this.handleHide}
      />
    ) : null;

    return (
      <React.Fragment>
        {selectImage}
        <CardColumns>
          {gifsArray.map(gif => {
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

// const mapDispatchToProps = dispatch => {
//   return {
//     handleSelect: url => actions.selectGif(url)
//   };
// };

export function mapStateToProps(state) {
  const { gifsArray } = state.search;
  return { gifsArray };
}

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(Home);
