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
        addTodo.find('button').get(0).click();
        expect(spy.called).to.be.true;
    })
})

module.exports = AddTodo;