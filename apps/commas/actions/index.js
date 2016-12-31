import { SET_STORY } from '../constants';

export function setStory(value) {
  return { type: SET_STORY, value };
}
