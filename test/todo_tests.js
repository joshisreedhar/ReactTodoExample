import React from 'react'
import {shallow} from 'enzyme';
import chai,{expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {Todo} from '../src/Todo';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';


chai.use(chaiEnzyme());
chai.use(sinonChai);

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
	expect(wrapper.find('button')).to.have.text('✓ ')
});
it('should call onToggleComplete on props when button is clicked', ()=>{
	props.onToggleCompleted=sinon.spy();
	wrapper = shallow(<Todo {...props} />);
	const preventDefaultSpy = sinon.spy();
	wrapper.find('button').simulate('click',{preventDefault:preventDefaultSpy});
	expect(preventDefaultSpy).to.be.called;
	expect(props.onToggleCompleted).to.be.called;
});

});
