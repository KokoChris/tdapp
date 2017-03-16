var React = require('react');
var TodoList = require('./TodoList');

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
  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
};



module.exports = TodoApp;
