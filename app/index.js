import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import SimpleContainer from './components/simple_container';


let store = createStore(
  reducers,
  applyMiddleware(thunk)
);
const content = document.getElementById('app')
render(
  <Provider store={store}>
    <SimpleContainer />
  </Provider>,
  content
);
