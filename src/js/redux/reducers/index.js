/**
 * Created by ninghai on 2018/7/7.
 *
 */
import { combineReducers } from 'redux';
import count from './counter';

const rootReducer = combineReducers({
    count
});

export default rootReducer;