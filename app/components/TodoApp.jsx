var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var SearchTodo = require('./TodoSearch');
var uuid = require('node-uuid');
var todoApi = require('../api/todoApi');
var moment = require('moment');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoApi.getTodos(),
      showCompleted: false,
      searchText: ''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidUpdate() {
    todoApi.setTodos(this.state.todos);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }
  handleToggle(id) {
    var newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }
  handleSearch(searchText, completed) {
    this.setState({
      showCompleted: completed,
      searchText: searchText.toLowerCase()
    })
  }
  render() {
    var { todos, showCompleted, searchText } = this.state;
    var filteredTodos = todoApi.getFilteredTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">TodoApp</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTodo onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodo addTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}



module.exports = TodoApp;
