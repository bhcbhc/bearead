/**
 * Created by ninghai on 2018/7/12.
 *
 */
import {
    INCREASE_COUNT,
    DECREASE_COUNT
} from '../actions/actionTypes';

const initState = {
    activedDivision: "112"
};

export default function (state= initState, action) {
    switch (action.type){
        case INCREASE_COUNT:
            return state+action.data;
        case DECREASE_COUNT:
            return state-action.data;
        default:
            return state;
    }
}