var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var { Provider } = require('react-redux');
var configureStore
var TodoApp = require('../components/TodoApp');
import TodoList from '../components/TodoList';

describe('<TodoApp />', () => {
    it('should exist', () => {
        var todoApp = shallow(<TodoApp />);
        expect(todoApp).to.exist;
    })
    it('should render TodoList', () => {
        const store = require('../store/configureStore').configure();
        const provider = mount(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
        const todoList = provider.find(TodoList);
        expect(todoList.length).to.equal(1);
    })

})