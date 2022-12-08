import createMockStore from "redux-mock-store";
import { Message } from "../index";
const { render } = require("@testing-library/react");
const { Provider } = require("react-redux");

// Сначала описываем
it("Message: matches snapshot", () => {
  // Используем библиотеку для создания мокового стора
  const mockStore = createMockStore();
  // Рендерим компонент сообщения, обернув в Provider, который симулирует redux
  const component = render(
    <Provider store={mockStore({ messages: [] })}>
      {/* Закидываем сообщение */}
      <Message
        message={{
          id: "123",
          author: "adsads",
          text: "321312",
        }}
      />
    </Provider>
  );
  // Меняем значения в пропсе и сравниваем снапшоты на валидность
  expect(component).toMatchSnapshot();
});
