import { ITEMS_FETCH_SUCCESS } from "../actions/actionsType";

const defaultValue = {
  items: [],
};

export default function itemReducer(state = defaultValue, action) {
  console.log(action, "<<<<<<<<<<<<<< ini action");
  if (action.type === ITEMS_FETCH_SUCCESS) {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state
}
