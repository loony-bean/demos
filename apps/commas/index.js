import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import CommasApp from './components/commas_app';

import reducer from './reducers';
import { setStory } from './actions';
import { mockStory1 } from './constants';

let mounted = new WeakMap();

window.app = function(mount_point) {
  if (typeof mount_point === 'string') {
    mount_point = document.querySelector(mount_point);
  }

  let store;
  if (!mounted.has(mount_point)) {
    store = applyMiddleware(thunk)(createStore)(reducer);

    ReactDOM.render(
      <Provider store={store}>
        <CommasApp />
      </Provider>,
      mount_point
    );
    mounted.set(mount_point, store);
  } else {
    store = mounted.get(mount_point);
  }

  store.dispatch(setStory(mockStory1));
};
