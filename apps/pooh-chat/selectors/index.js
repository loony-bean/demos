import { createSelector, createStructuredSelector } from 'reselect';

const unsafeTitleSelector = state => state.chat.story.title;
const unsafeMessagesSelector = state => state.chat.story.messages;
const unsafePositionSelector = state => state.chat.position;

const messagesSelector = createSelector(
  unsafeMessagesSelector,
  unsafePositionSelector,
  (messages, position) => {
    return messages.slice(0, position);
  }
);

export const chatSelector = createStructuredSelector({
  title: unsafeTitleSelector,
  messages: messagesSelector
});
