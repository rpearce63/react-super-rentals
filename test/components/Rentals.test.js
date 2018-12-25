import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Rentals from "../../components/Rentals";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { rentalData } from "../../redux/rentalData";

const initialState = { rentals: rentalData };

const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <Rentals />
    </Provider>
  );
});

Enzyme.configure({ adapter: new Adapter() });

describe("Rental list tests", () => {
  it("renders the Rentals page", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
