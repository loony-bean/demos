import { SET_STORY,
         SHOW_NEXT_MESSAGE,
         SHOW_ALL_MESSAGES,
         HIDE_ALL_MESSAGES } from '../constants';

const initialState = {
  story: {title: '', messages: []},
  position: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
  case SET_STORY: {
    const newPosition = (action.value.messages.length > 0) ? 1 : 0;
    return Object.assign({}, state, { story: action.value, position: newPosition});
  }
  case SHOW_NEXT_MESSAGE: {
    const newPosition = (state.position < state.story.messages.length)
      ? state.position + 1
      : state.position;
    return Object.assign({}, state, { position: newPosition });
  }
  case SHOW_ALL_MESSAGES: {
    return Object.assign({}, state, { position: state.story.messages.length });
  }
  case HIDE_ALL_MESSAGES: {
    const newPosition = (state.story.messages.length > 0) ? 1 : 0;
    return Object.assign({}, state, { position: newPosition });
  }
  default:
    return state;
  }
}
