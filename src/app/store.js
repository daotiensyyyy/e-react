import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userList', 'orderList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initalState = {}

const middleware = [thunk]

const store = createStore(persistedReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store);

export default store;
