import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SelectedImage } from "../SelectImage";
import { Image, Modal } from "react-bootstrap";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/get-giphy.js");

describe("SelectedImage Component", () => {
  let wrapper = {};

  const props = {
    onHide: jest.fn(),
    selected: fakeData.giphy.itemsArray[0].images.original.url
  };

  beforeEach(() => {
    wrapper = shallow(<SelectedImage {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has Image, Modal components", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
  });
});
