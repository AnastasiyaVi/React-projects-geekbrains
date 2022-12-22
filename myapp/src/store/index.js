import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { profileReducer } from './profile/reducer';
import { chatReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { cataasReducer } from './cataas/reducer';

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root', //Свойство key указывает ключ, по которому в локальном хранилище будут сохраняться и получаться данные
    storage, //Свойство storage указывает хранилище, которое будет использовано для хранения данных.
    blacklist: ['messages'] // служат для указания названий редьюсеров, состояние которых будет сохраняться хранилище 
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer,
    cataas: cataasReducer
});

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем store с использованием persistedReducer
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);