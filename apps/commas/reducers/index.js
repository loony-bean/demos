import { SET_STORY } from '../constants';

const initialState = {
  story: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
  case SET_STORY:
    return Object.assign({}, state, { story: action.value });
  default:
    return state;
  }
}
