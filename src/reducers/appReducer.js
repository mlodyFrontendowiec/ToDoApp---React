import { ADD, EDIT, DELETE } from "../actions/appActions";

export const appReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      const newState = state.filter((item) => item.id !== payload.id);
      return [...newState];

    default:
      return state;
  }
};
