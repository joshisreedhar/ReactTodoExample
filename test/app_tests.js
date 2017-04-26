import React from 'react';
import chai,{expect} from 'chai';
import {App} from '../src/app';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

describe('App', ()=>{
	it('Should render h1 with todos',()=>{
	 const wrapper = shallow(<App />);
	 expect(wrapper).to.have.descendants('TodoList');
	 expect(wrapper).to.have.descendants('h1');
	});
});
