import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { SET_CHATS } from "../actions";
// Этот тест проверяет доходит диспач экшена до стора
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const addChats = () => ({ type: SET_CHATS });

it("should dispatch action", () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(addChats());

  const actions = store.getActions();
  const expectedPayload = { type: SET_CHATS };
  expect(actions).toEqual([expectedPayload]);
});
