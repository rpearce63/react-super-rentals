import * as constants from "./constants";
import { rentalData } from "./rentalData";
export default function(state = { rentalData: [], filter: "" }, action) {
  switch (action.type) {
    case constants.LOAD_RENTALS:
      return { ...state, rentalData: rentalData };
    case constants.FILTER_VALUE:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
