import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  Nav,
  Button,
  Form,
  FormControl,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import fakeProps from "../../store/__mocks__/fakeStore";
import { SearchForm, mapStateToProps } from "../SearchForm";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/get-giphy.js");

describe("SearchForm Container", () => {
  let wrapper = {};

  const props = {
    giphyType: fakeProps.giphy.giphyType,
    searchText: fakeProps.giphy.searchText,
    giphySearch: jest.fn(),
    setSearchText: jest.fn(),
    giphyTrending: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<SearchForm {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it("has Nav, Button, Form, FormControl, ToggleButtonGroup, ToggleButton tags", () => {
    expect(wrapper.find(Nav)).to.have.length(3);
    expect(wrapper.find(Form)).to.have.length(1);
    expect(wrapper.find(FormControl)).to.have.length(1);
    expect(wrapper.find(Button)).to.have.length(1);
    expect(wrapper.find(ToggleButton)).to.have.length(2);
    expect(wrapper.find(ToggleButtonGroup)).to.have.length(1);
  });

  it("entering letter in search triggers setSearchText ", () => {
    const form = wrapper.find(FormControl);
    const event = { target: { value: "t" } };
    form.simulate("change", event);
    expect(props.setSearchText.mock.calls.length).to.equal(1);
  });

  it("submit triggers giphySearch ", () => {
    const form = wrapper.find(Form);
    form.simulate("submit", { preventDefault: () => {} });
    expect(props.giphySearch.mock.calls.length).to.equal(1);
  });

  it("clicking stickers triggers search", () => {
    const button = wrapper.find(ToggleButtonGroup).childAt(1);
    button.simulate("change", "stickers");
    expect(props.giphySearch.mock.calls.length).to.equal(1);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      giphy: { giphyType: "type", searchText: "text" }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      giphyType: "type",
      searchText: "text"
    };

    expect(actualResult).to.deep.equal(expectedResult);
  });
});
