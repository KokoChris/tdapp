var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;
import { configure } from '../store/configureStore';
import ConnectedTodoList, { TodoList } from '../components/TodoList'
import ConnectedTodo, { Todo } from '../components/Todo';
var { Provider } = require('react-redux');

describe('<TodoList />', () => {
    it('should exist', () => {
        var todoList = shallow(<TodoList todos={[{ id: 1, text: "blabla" }]} />);
        expect(todoList).to.exist;
    })
    it('should render proper amount of Todos', () => {

        var todos = [
            {
                id: 1,
                text: "blabla",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Do something else',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];



        var store = configure({
            todos
        })
        var provider = mount(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );
        var todoList = provider.find(ConnectedTodoList);
        expect(todoList.find('div').find('Todo').length).to.equal(2);
    })
})