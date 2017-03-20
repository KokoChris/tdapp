var React = require('react');
var { connect } = require('react-redux');
import Todo from './Todo';
import Api from '../api/todoApi.js';

export class TodoList extends React.Component {
    render() {
        var { todos, showCompleted, searchText } = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">No active todo items</p>
                )
            };
            return Api.getFilteredTodos(todos, showCompleted, searchText).map((todo) => {
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
        todos: state.todos,
        searchText: state.searchText,
        showCompleted: state.showCompleted
    }
}

export default connect(mapStateToProps)(TodoList);