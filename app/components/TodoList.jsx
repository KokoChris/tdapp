var React = require('react');
var Todo = require('./Todo');

class TodoList extends React.Component {
    render() {
        var { todos, onToggle } = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">No active todo items</p>
                )
            };
            return todos.map((todo) => {
                return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />)
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

module.exports = TodoList;