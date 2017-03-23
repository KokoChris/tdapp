var expect = require('chai').expect;
var reducers = require('../reducers/reducers');
var moment = require('moment');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer('', action);
            expect(res).to.be.eql(action.searchText);
        });
    })
    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer('', action);
            expect(res).to.be.true;
        });
    });
    describe('todosReducer', () => {
        it('should add to todos array', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 93232932
                }
            };
            var res = reducers.todosReducer([], action);
            expect(res).to.be.instanceof(Array);
            expect(res).to.have.length(1);
            expect(res[0]).to.be.eql(action.todo);
        });
        it('should toggle todo completed status', () => {
            var todos = [{
                id: '123',
                text: 'Some tas',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            var res = reducers.todosReducer(todos, action);
            expect(res).to.be.instanceof(Array);
            expect(res).to.have.length(1);
            expect(res[0].completed).to.be.false;
            expect(res[0].completedAt).to.be.undefined;

        })
        it('should add existing todos', () => {
            var todos = [{
                id: '123',
                text: 'Some tas',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = reducers.todosReducer(todos, action);
            expect(res).to.be.instanceof(Array);
            expect(res).to.have.length(2);
        });
    })
})