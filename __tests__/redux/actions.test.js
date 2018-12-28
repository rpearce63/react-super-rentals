import React from "react";
import * as actions from "../../redux/actions";
import { rentalData } from "../../redux/rentalData";
import * as constants from "../../redux/constants";

describe("action creators", () => {
  it("creates the action", () => {
    const action = actions.loadRentals();
    expect(action).toEqual({
      type: constants.LOAD_RENTALS
    });
  });

  it("creates the action", () => {
    const action = actions.setListFilter("s");
    expect(action).toEqual({
      type: constants.FILTER_VALUE,
      payload: "s"
    });
  });
});
