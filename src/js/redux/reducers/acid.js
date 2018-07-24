import {
  CHANGE_ACID
} from '../actions/actionTypes';

export default function acid(state = 0, action) {
  switch (action.type) {
    case CHANGE_ACID:
      return action.acid;
    default:
      return state;
  }
}