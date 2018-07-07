/**
 * Created by ninghai on 2018/7/7.
 *
 */
import {
    INCREASE_COUNT,
    DECREASE_COUNT
} from './actionTypes'

export function increment() {
    return {
        type: INCREASE_COUNT,
        data:1
    }
}

export function decrement() {
    return {
        type: DECREASE_COUNT,
        data:1
    }
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const {count} = getState()
        if (count % 2 === 0){
            return;
        }
        dispatch(increment());
    }
}

export function incrementAsync() {
    return dispatch =>{
        setTimeout(()=>{
            dispatch(increment())
        }, 2000)
    }
}