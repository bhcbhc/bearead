// 如果是产品（打包）模式，store 采用此配置
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );
  return store
}
