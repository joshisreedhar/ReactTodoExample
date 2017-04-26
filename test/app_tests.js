import React from 'react';
import chai,{expect} from 'chai';
import {App} from '../src/app';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(chaiEnzyme());
chai.use(sinonChai);


describe('App', ()=>{

	let wrapper, state, dispatchSpy;
beforeEach(()=>{

		state  = {todos:1};
		dispatchSpy = sinon.spy();
		const options = {
			context: {
				store: {
					getState: ()=> state,
					dispatch: dispatchSpy,
				},
			},
		};

	wrapper = shallow(<App />, options);

});
	it('Should render h1 with todos',()=>{
	 expect(wrapper).to.have.descendants('TodoList');
	 expect(wrapper).to.have.descendants('h1');
		expect (wrapper.find('TodoList')).to.have.prop('todos').deep.equal(state.todos);
	});

	it('should dispatch with TOGGLE_COMPLETE and index then TodoList onToggleCompletedTodod is called',()=>{
		wrapper.find('TodoList').simulate('toggleCompletedTodo',0);
		expect(dispatchSpy).to.have.been.calledWith({type:'TOGGLE_COMPLETED',index:0});
	});
});
