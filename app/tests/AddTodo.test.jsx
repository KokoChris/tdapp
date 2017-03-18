var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var AddTodo = require('../components/AddTodo');

describe('<AddTodo />', () => {
    it('should exist', () => {
        var addTodo = shallow(<AddTodo />);
        expect(addTodo).to.exist;
    })
    it('should call onAddTodo prop with valid data', () => {
        var spy = sinon.spy();
        var addTodo = mount(<AddTodo addTodo={spy} />);
        addTodo.setState({ newTodoText: 'a new todo' })
        addTodo.find('button').get(0).click();
        expect(spy.calledWith('a new todo')).to.be.true;
    })
    it('should not called onAddToto in case of empty string', () => {
        var spy = sinon.spy();
        var addTodo = mount(<AddTodo addTodo={spy} />);
        addTodo.setState({ newTodoText: '' })
        addTodo.find('button').get(0).click();
        expect(spy.called).to.not.be.true;
    });
})

module.exports = AddTodo;