import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import PoohChatApp from './components/pooh_chat_app';

import chat from './reducers/chat';
import { setStory } from './actions';
import { poohStory } from './constants';

let mounted = new WeakMap();

window.app = function(mount_point) {
  if (typeof mount_point === 'string') {
    mount_point = document.querySelector(mount_point);
  }

  let store;
  if (!mounted.has(mount_point)) {
    const reducers = { chat };
    const reducer = combineReducers(reducers);
    store = applyMiddleware(thunk)(createStore)(reducer);

    ReactDOM.render(
      <Provider store={store}>
        <PoohChatApp />
      </Provider>,
      mount_point
    );
    mounted.set(mount_point, store);
  } else {
    store = mounted.get(mount_point);
  }

  store.dispatch(setStory(poohStory));
};
