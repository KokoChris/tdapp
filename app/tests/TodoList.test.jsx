var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var TodoList = require('../components/TodoList');
describe('<TodoList />', () => {
    it('should exist', () => {
        var todoList = shallow(<TodoList todos={[{ id: 1, text: "blabla" }]} />);
        expect(todoList).to.exist;
    })
    it('should render proper amount of Todos', () => {
        var todoList = shallow(<TodoList todos={[{ id: 1, text: "blabla" }]} />);
        expect(todoList.find('div').find('Todo').length).to.equal(1);
    })
})