var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var TodoSearch = require('../components/TodoSearch');

describe('<TodoSearch />', () => {
    it('should exist', () => {
        var todoSearch = shallow(<TodoSearch />);
        expect(todoSearch).to.exist;
    });
    it('should call onSearch with proper search text', () => {
        var spy = sinon.spy();
        var todoSearch = mount(<TodoSearch onSearch={spy} />);
        todoSearch.setState({ searchText: "I searched" });
        todoSearch.find('[type="search"]').simulate('change');
        expect(spy.calledWith('I searched', false)).to.be.true;
    })
    it('should call onSearch with correct checkbox status', () => {
        var spy = sinon.spy();
        var todoSearch = shallow(<TodoSearch onSearch={spy} />);
        todoSearch.setState({ checkboxState: "I searched" });
        todoSearch.find('[type="checkbox"]').simulate('change', { target: { checked: true } });
        expect(spy.calledWith('', true)).to.be.true;
    })
})