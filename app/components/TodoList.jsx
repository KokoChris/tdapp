var React = require('react');
var { connect } = require('react-redux');
import Todo from './Todo';

export class TodoList extends React.Component {
    render() {
        var { todos } = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">No active todo items</p>
                )
            };
            return todos.map((todo) => {
                return (<Todo key={todo.id} {...todo} />)
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);