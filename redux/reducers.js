import { combineReducers } from "redux";

import RentalsReducer from "./rentals-reducer";

const rootReducer = combineReducers({
  rentals: RentalsReducer
});

export default rootReducer;
