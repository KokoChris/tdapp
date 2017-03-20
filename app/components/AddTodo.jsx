var React = require('react');
import { connect } from 'react-redux';
var actions = require('../actions/actions')

export class AddTodo extends React.Component {
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
            this.props.dispatch(actions.addTodo(currentTodoText));
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
            <div className="container_footer">
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus value={this.state.newTodoText} onChange={this.handleInputChange} type="text" />
                    <button type="submit" className="button primary">AddTodo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);