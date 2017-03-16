var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var Todo = require('../components/TodoApp');
describe('<Todo/>', () => {
    it('should exist', () => {
        var todo = shallow(<Todo />);
        expect(todo).to.exist;
    })
})