var React = require('react');
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
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
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
