import React from 'react';
import store from './store/index';
import { Provider } from 'react-redux';
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
