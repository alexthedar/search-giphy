import React, { Component } from "react";
import { connect } from "react-redux";
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
      selected: "",
      modalShow: false
    });
  }

  render() {
    const { itemsArray } = this.props;
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
          {itemsArray.map(gif => {
            return (
              <Card
                key={gif.id}
                border="light"
                body={false}
                onClick={() => this.handleSelect(gif.images.original.url)}
              >
                <Card.Img
                  src={gif.images.fixed_height_downsampled.url} // can't decide between still ro downsampled fixed_height_still
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
  const { itemsArray } = state.giphy;
  return { itemsArray };
}

export default connect(mapStateToProps)(Home);
