var React = require('react');
var moment = require('moment');

class Todo extends React.Component {
    render() {
        var { id, text, completed, createdAt, completedAt } = this.props;
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
                    <input type="checkbox" checked={completed} onChange={() => this.props.onToggle(id)} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

module.exports = Todo;