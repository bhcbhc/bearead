/**
 * Created by ninghai on 2018/7/7.
 *
 */
import {createStore, applyMiddleware} from 'redux'
import { createLogger} from 'redux-logger'
import  thunkMiddleware from 'redux-thunk'
import reducer from './reducers';

const devStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger({
        level: 'info',
        collapsed: true
    })
)(createStore);

const proStoreWithMiddleware =applyMiddleware(
    thunkMiddleware
)(createStore);

const createStoreWithMiddleware = process.env.NODE_ENV === 'dev' ?  devStoreWithMiddleware : proStoreWithMiddleware


export default function configureStore(initialState) {
    const store =createStoreWithMiddleware(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
