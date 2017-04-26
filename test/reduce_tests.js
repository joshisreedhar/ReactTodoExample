import reducer from "../src/reducer";
import {expect} from 'chai';

describe("reducers",() => {

describe("INIT", () => {

	it("should set the initial state to two todos",()=>{
		const result = reducer(undefined,{});
		const expected = {todos:[
			{id:1, text:'Todo 1', completed: false},
			{id:2, text: 'Todo 2', completed:false}, 
		]};
		expect(result.todos).to.deep.equal(expected.todos);
	});

});
});
