var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');
var actions = require('../actions/actions');

export class Todo extends React.Component {
    render() {

        var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
        var todoClassName = completed ? "todo todo-completed" : "todo"
        var renderDate = () => {
            var message = 'Created At ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed At ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
        }
        return (
            <div className={todoClassName} >
                <div>
                    <input type="checkbox"
                        checked={completed}
                        onChange={(e) => {
                            e.stopPropagation();
                            dispatch(actions.toggleTodo(id));
                        }} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo);