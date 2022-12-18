import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { all_reducers } from './combined_reducers/combine_reducers';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import storage from "redux-persist/es/storage/session"
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));


const persistConfig = {
  key:'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, all_reducers)
const data_store = createStore(persistedReducer, undefined, compose(applyMiddleware(thunk)))
const persistor = persistStore(data_store)

const Loading = () => {
  console.log('Loading')
  return (
    <div>Loading</div>
  )
}
root.render(
  <Provider store={data_store}>
    <PersistGate loading={<Loading />} persistor={persistor} >
      <>
        <App />
      </>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

