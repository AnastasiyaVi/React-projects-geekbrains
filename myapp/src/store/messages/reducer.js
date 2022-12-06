import { SET_MESSAGES } from "./actions";

// statuses - 'idle' | 'fetching' | 'succeeded' | 'failed',
// error - string | null

const initialState = {
  messages: {},
  status: "idle",
  error: null,
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES: {
      return {
        ...state,
        messages: payload,
      };
    }
    default:
      return state;
  }
};
