import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Layout from "../Layout";
import fakeData from "../../store/__mocks__/fakeStore";
import { Navbar, Container } from "react-bootstrap";
import SearchForm from "../../components/SearchForm";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);
let store = null;

jest.mock("../../api/get-giphy.js");
const initialState = { ...fakeData };
const TestComponent = () => <div />;

describe("Layout HOC Component", () => {
  let wrapper = {};

  beforeEach(() => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <Layout>
          <TestComponent />
        </Layout>
      </Provider>
    );
  });

  it("has Navbar, Container, NavbarBrand, Nav, TestComponent & SearchForm", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find("NavbarBrand")).toHaveLength(1);
    expect(wrapper.find(TestComponent)).toHaveLength(1);
    expect(wrapper.find(SearchForm)).toHaveLength(1);
  });
});
