import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { SET_MESSAGES } from "../../../store/messages/actions";
import { MessageList } from "../index";
const { render } = require("@testing-library/react");
const { Provider } = require("react-redux");

const middlewares = [thunk];
// Используем библиотеку для создания мокового стора
const mockStore = configureStore(middlewares);

// описание
it("Message: matches snapshot", async () => {
  const initialState = {
    chats: [{ id: "chat-1", name: "test chat" }],
    messages: {
      messages: [],
    },
  };

  const store = mockStore(initialState);

  const addMessage = () => ({
    type: SET_MESSAGES,
    payload: [
      {
        id: "dasndj1ddsjk",
        chatId: "chat-1",
        text: "test text",
        author: "test",
      },
    ],
  });
  store.dispatch(addMessage());

  // Рендерим компонент сообщений, обернув в Provider, который симулирует redux
  const component = render(
    <Provider store={store}>
      <MessageList chatId="chat-1" chatExists />
    </Provider>
  );

  // Меняем значения в пропсе и сравниваем снапшоты на валидность
  expect(component).toMatchSnapshot();
});
