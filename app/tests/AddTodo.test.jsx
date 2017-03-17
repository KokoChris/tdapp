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
})

module.exports = AddTodo;