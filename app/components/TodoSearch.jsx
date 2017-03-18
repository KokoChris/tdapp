var React = require('react');

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            checkboxState: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    handleInputChange(e) {
        e.preventDefault();
        this.setState({
            searchText: e.target.value
        });
        this.props.onSearch(e.target.value, this.state.checkboxState);
    }
    handleCheckboxChange(e) {
        this.setState({
            checkboxState: e.target.checked
        })
        this.props.onSearch(this.state.searchText, e.target.checked);
    }
    render() {
        return (
            <div>
                <div>
                    <input type="search" value={this.state.searchText} onChange={this.handleInputChange} placeholder="searchTodoByName" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={this.state.checkboxState} onChange={this.handleCheckboxChange} />
                        Show only completed todos
                    </label>
                </div>
            </div>
        )
    }
}

module.exports = TodoSearch;