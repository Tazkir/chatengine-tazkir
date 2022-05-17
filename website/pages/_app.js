import '../styles/global.css'

import Header from '../components/Header'

import thunk from "redux-thunk";
import promise from 'redux-promise';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = { key: 'chat.engine.inc', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(
  store,
  {},
  () => { console.log('Getting persisted state from store') }
);

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}