var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var TodoApp = require('../components/TodoApp');
describe('<TodoApp />', () => {
    it('should exist', () => {
        var todoApp = shallow(<TodoApp />);
        expect(todoApp).to.exist;
    })
    it('should add todo to the todos state on handleAddTodo', () => {
        var todoApp = shallow(<TodoApp />);
        todoApp.setState({
            todos: []
        })
        todoApp.instance().handleAddTodo('test text');
        expect(todoApp.state().todos[0].text).to.equal('test text');
    })
    it('should toogle completed value when handleToggleCalled', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        }
        var todoApp = shallow(<TodoApp />);
        todoApp.setState({ todos: [todoData] });
        expect(todoApp.state().todos[0].id === 11).to.be.true;
        todoApp.instance().handleToggle(11);
        expect(todoApp.state().todos[0].completed === true).to.be.true;
    })
})