import * as constants from "./constants";

export default function(state = { rentalData: [], filter: "" }, action) {
  switch (action.type) {
    case constants.LOAD_RENTALS:
      return { ...state, rentalData: action.payload };
    case constants.FILTER_VALUE:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
