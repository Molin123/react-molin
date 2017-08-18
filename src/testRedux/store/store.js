import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

// let createStoreWithMiddleware;
// store负责管理所有reducer，module.hot.accept表示支持热更新
// createStoreWithMiddleware = (createStore);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  return store;
}
