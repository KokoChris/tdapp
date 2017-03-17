var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

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
        }
      ]
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(text) {
    alert('new todo : ' + text);
  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
}



module.exports = TodoApp;
