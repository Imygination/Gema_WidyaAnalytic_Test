import { ITEMS_ID_FETCH_SUCCESS } from "../actions/actionsType";

const defaultValue = {
  item: {},
};

export default function itemIdReducer(state = defaultValue, action) {
  console.log(action, "<<<<<<<<<<<<<< ini action");
  if (action.type === ITEMS_ID_FETCH_SUCCESS) {
    return {
      ...state,
      item: action.payload,
    };
  }
  return state;
}
