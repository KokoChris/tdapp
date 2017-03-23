var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

import { AddTodo } from '../components/AddTodo';
import * as actions from '../actions/actions';

describe('<AddTodo />', () => {
    it('should exist', () => {
        var addTodo = shallow(<AddTodo />);
        expect(addTodo).to.exist;
    })
    it('should call onAddTodo prop with valid data', () => {
        var spy = sinon.spy();
        var action = actions.startAddTodo('a new todo');
        var addTodo = mount(<AddTodo dispatch={spy} />);
        addTodo.setState({ newTodoText: 'a new todo' })
        addTodo.find('button').get(0).click();
        console.log(spy.args);
        console.log(typeof (spy.args));
        expect(spy.calledWithMatch(action)).to.be.true;
    })
    it('should not called onAddToto in case of empty string', () => {
        var spy = sinon.spy();
        var addTodo = mount(<AddTodo addTodo={spy} />);
        addTodo.setState({ newTodoText: '' })
        addTodo.find('button').get(0).click();
        expect(spy.called).to.not.be.true;
    });
})

