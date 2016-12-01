import { SET_STORY,
         SHOW_NEXT_MESSAGE,
         SHOW_ALL_MESSAGES,
         HIDE_ALL_MESSAGES } from '../constants';

export function setStory(value) {
  return { type: SET_STORY, value };
}

export function showNextMessage() {
  return { type: SHOW_NEXT_MESSAGE };
}

export function showAllMessages() {
  return { type: SHOW_ALL_MESSAGES };
}

export function hideAllMessages() {
  return { type: HIDE_ALL_MESSAGES };
}
