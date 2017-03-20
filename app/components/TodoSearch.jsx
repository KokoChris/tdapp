var React = require('react');
var { connect } = require('react-redux');
var actions = require('../actions/actions');

export class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    handleInputChange(e) {
        e.preventDefault();
        this.props.dispatch(actions.setSearchText(e.target.value));
    }
    handleCheckboxChange(e) {
        this.props.dispatch(actions.toggleShowCompleted());
    }
    render() {
        var { showCompleted, searchText } = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" value={searchText} onChange={this.handleInputChange} placeholder="searchTodoByName" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={showCompleted} onChange={this.handleCheckboxChange} />
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
}
export default connect()(TodoSearch);