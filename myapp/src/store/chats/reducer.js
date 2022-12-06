import { SET_CHATS } from "./actions";

const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHATS: {
      return {
        ...state,
        chats: payload,
      };
    }
    default:
      return state;
  }
};
