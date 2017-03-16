var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var TodoList = require('../components/TodoList');
describe('<TodoList />', () => {
    it('should exist', () => {
        var todoList = shallow(<TodoList todos={[{id:1,text:"blabla"}]} />);
        expect(todoList).to.exist;
    })
})