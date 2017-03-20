var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var Todo = require('../components/Todo').Todo;
describe('<Todo/>', () => {
    it('should exist', () => {
        var todo = shallow(<Todo />);
        expect(todo).to.exist;
    });
    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        };
        var spy = sinon.spy();
        var todo = mount(<Todo {...todoData} dispatch={spy} />)
        todo.find('[type="checkbox"]').simulate('change', { target: { checked: false, stopPropagation: () => { } } });
        expect(spy.calledWith({ type: 'TOGGLE_TODO', id: 199 }));
    });
})