import React from 'react';
import {shallow} from 'enzyme';
import chai,{expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {TodoList} from '../src/TodoList';

chai.use(chaiEnzyme());

describe('<TodoList />',()=>{
	it('Should render 2 default todos',()=>{	
	const wrapper = shallow(<TodoList />);
	expect(wrapper).to.have.exactly(2).descendants('Todo');
	});

	it('should render first todo with Text Todo 1 and completed false',()=>{
		const wrapper = shallow(<TodoList />);
		const child = wrapper.find('Todo').at(0);
		expect(child).to.have.prop('text','Todo 1');
		expect(child).to.have.prop('completed', false);
	});
	it('should render first todo with Text Todo 2 and completed false',()=>{
		const wrapper = shallow(<TodoList />);
		const child = wrapper.find('Todo').at(1);
		expect(child).to.have.prop('text','Todo 2');
		expect(child).to.have.prop('completed', true);
	});
});
