import React from 'react'
import {Todo} from './Todo'

export class TodoList extends React.Component{
constructor(props){
 	super(props);
	this.state = {
		todos:[
			{text: 'Todo 1', completed: false},
			{text: 'Todo 2', completed: true}
		]
	}
}

handleCompleted(index){
	const newState = JSON.parse(JSON.stringify(this.state));
	newState.todos[index].completed = !newState.todos[index].completed;
	this.setState(newState);
}

render(){
	return <ul>{
	this.state.todos.map((todo,i) => <li> <Todo completed = {todo.completed} text ={todo.text} onToggleCompleted = {()=>{this.handleCompleted(i);}} /> </li>)
	}</ul>

}


}
