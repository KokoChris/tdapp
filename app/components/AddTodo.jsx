var React = require('react');

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTodoText: ''
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var currentTodoText = this.state.newTodoText;
        if (currentTodoText.length > 0) {
            this.props.addTodo(this.state.newTodoText);
            this.setState({ newTodoText: '' });
        }

    }
    handleInputChange(e) {
        this.setState({
            newTodoText: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus value={this.state.newTodoText} onChange={this.handleInputChange} type="text" />
                <button type="submit" className="button primary">AddTodo</button>
            </form>
        )
    }
}

module.exports = AddTodo;