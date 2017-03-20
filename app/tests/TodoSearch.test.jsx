var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

import { TodoSearch } from '../components/TodoSearch';

describe('<TodoSearch />', () => {
    it('should exist', () => {
        var todoSearch = shallow(<TodoSearch />);
        expect(todoSearch).to.exist;
    });
    it('should call onSearch with proper search text', () => {
        var spy = sinon.spy();
        var todoSearch = mount(<TodoSearch dispatch={spy} />);
        todoSearch.setProps({ searchText: 'I searched' })
        todoSearch.find('[type="search"]').simulate('change');
        expect(spy.calledWith({ type: 'SET_SEARCH_TEXT', searchText: 'I searched' })).to.be.true;
    })
    it('should call onSearch with correct checkbox status', () => {
        var spy = sinon.spy();
        var todoSearch = shallow(<TodoSearch dispatch={spy} />);
        todoSearch.find('[type="checkbox"]').simulate('change', { target: { checked: true } });
        expect(spy.calledWith({ type: 'TOGGLE_SHOW_COMPLETED' })).to.be.true;
    })
})