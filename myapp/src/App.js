import "./App.css";
import { Routers } from "./routes";
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from "redux-persist/es/integration/react"

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Routers />
      </PersistGate>
    </Provider>
  )
}

export default App;
