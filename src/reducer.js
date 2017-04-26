const initialState = {
	todos:[
		{id:1,text:"Todo 1", completed: false},
		{id:2, text:"Todo 2", completed: false}
	]
};

const reducer = (state= initialState, action)=>{
	switch(action.type){
		default:
			return state;
	}
};


export default reducer;
