var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var TodoApp = require('TodoApp');
var store = require('./store/configureStore').configure();
var TodoApi = require('./api/todoApi.js');
var actions = require('./actions/actions');
store.subscribe(() => {
  var state = store.getState();
  TodoApi.setTodos(state.todos);
})

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));
// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
