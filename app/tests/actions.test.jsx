var expect = require('chai').expect;
var actions = require('../actions/actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '123abc',
                text: 'whatever',
                completed: false,
                createdAt: 0
            }
        }

        var res = actions.addTodo(action.todo);
        expect(res).to.be.eql(action);
    })
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';
        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).to.include({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).to.include({
                text: todoText
            });
            done();
        }).catch(done);
    });
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
    it('should generate add todos action', () => {
        var todos = [{
            id: '111',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }]
        var action = {
            type: 'ADD_TODOS',
            todos
        }
        var res = actions.addTodos(todos);
        expect(res).to.eql(action);
    })
});