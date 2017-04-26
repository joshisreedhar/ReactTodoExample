import React from 'react'
import {shallow} from 'enzyme';
import chai,{expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {Todo} from '../src/Todo';

chai.use(chaiEnzyme());

describe('<Todo />',()=>{	
let wrapper, props;

beforeEach(()=>{
	props={text:'Hello',completed:false};
	wrapper = shallow(<Todo {...props} />);
});

it('Should render text to dom',()=>{
	expect(wrapper).text().to.have.string('Hello');
});
it('Should render del when status is completed',()=>{
	props={text:'Hello',completed:true};
	wrapper = shallow(<Todo {...props} />);
	expect(wrapper.find('del')).text().to.have.string('Hello');
});
it('Should render toggle complete button',()=>{
	props={text:'Hello',completed:true};
	wrapper = shallow(<Todo {...props} />);
	expect(wrapper).to.have.descendants('button');
	expect(wrapper.find('button')).to.have.text('✓')
});
});
