var expect = require('chai').expect;
var actions = require('../actions/actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        var res = actions.setSearchText(action.searchText);
        expect(res).to.be.eql(action);
    });
    it('should generate addTodo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Go for a walk'
        }

        var res = actions.addTodo(action.text);
        expect(res).to.be.eql(action);
    })
    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var res = actions.toggleShowCompleted();
        expect(res).to.be.eql(action);
    })
    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 44
        }
        var res = actions.toggleTodo(44);
        expect(res).to.eql(action);
    })
});