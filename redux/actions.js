/*
 * You can put your actions here in this file, or break them up across
 * multiple files. Redux patterns are very... flexible. This is just one
 * possible approach.
 *
 * You should obviously replace this action with some of your own that actually
 * do useful things.
 *
 * For more information please see the Redux Actions Documentation
 * https://redux.js.org/basics/actions
 */

import * as constants from "./constants";
import { rentalData } from "./rentalData";

export const loadRentals = () => {
  return {
    type: constants.LOAD_RENTALS,
    payload: rentalData
  };
};

export const setListFilter = param => {
  return {
    type: constants.FILTER_VALUE,
    payload: param
  };
};
