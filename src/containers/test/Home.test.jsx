import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Card, CardColumns } from "react-bootstrap";
import fakeProps from "../../store/__mocks__/fakeStore";
import { Home, mapStateToProps } from "../Home";
import SelectImage from "../../components/SelectImage";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/get-giphy.js");

describe("Home Container", () => {
  let wrapper = {};

  const props = {
    itemsArray: fakeProps.giphy.itemsArray,
    handleSelect: jest.fn(),
    handleHide: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it("shows SelectImage when state has selected and modalShow", () => {
    wrapper.setState({
      selected: fakeProps.giphy.itemsArray[0].images.original.url,
      modalShow: true
    });
    expect(wrapper.find(SelectImage)).to.have.length(1);
  });

  it("has Card, CardColumns tags", () => {
    expect(wrapper.find(CardColumns)).to.have.length(1);
    expect(wrapper.find(Card)).to.have.length(2);
  });

  it("clicking on image triggers SelectImage and sets state", () => {
    const card = wrapper.find(CardColumns).childAt(0);
    card.simulate("click");
    expect(wrapper.state()).to.deep.equal({
      selected: fakeProps.giphy.itemsArray[0].images.original.url,
      modalShow: true
    });

    expect(wrapper.find(SelectImage)).to.have.length(1);
  });

  it("handleHide clears state and hides modal", () => {
    const instance = wrapper.instance();
    wrapper.setState({
      selected: fakeProps.giphy.itemsArray[0].images.original.url,
      modalShow: true
    });
    instance.handleHide();
    wrapper.update();
    expect(wrapper.state()).to.deep.equal({ selected: "", modalShow: false });
    expect(wrapper.find(SelectImage)).to.have.length(0);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      giphy: { itemsArray: ["test"] }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      itemsArray: ["test"]
    };

    expect(actualResult).to.deep.equal(expectedResult);
  });
});
