var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var SearchTodo = require('./TodoSearch');
var uuid = require('node-uuid');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Play the guitar'
        },
        {
          id: uuid(),
          text: 'Leave mail on porch'
        },
        {
          id: uuid(),
          text: 'Play horizon'
        }

      ],
      showCompleted: false,
      searchText: ''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }
  handleSearch(term, completed) {
    this.setState({
      showCompleted: completed,
      searchText: searchText.toLowerCase()
    })
  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <SearchTodo onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
}



module.exports = TodoApp;
