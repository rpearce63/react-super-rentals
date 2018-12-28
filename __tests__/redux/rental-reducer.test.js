import rentalReducer from "../../redux/rentals-reducer";
import * as constants from "../../redux/constants";
import { rentalData } from "../../redux/rentalData";

const initialState = { rentalData: [], filter: "" };

describe("test reducer", () => {
  it("returns the rentalData", () => {
    const action = { type: constants.LOAD_RENTALS };
    const state = rentalReducer(initialState, action);
    expect(state.rentalData).toEqual(rentalData);
  });

  it("returns the default filter", () => {
    const action = { type: constants.FILTER_VALUE, payload: "p" };
    const currentState = { rentalData: rentalData };
    const state = rentalReducer(currentState, action);
    expect(state.filter).toBe("p");
  });
});
