import React from 'react'

export const Todo = (props) => <div><button onClick={(e)=>{e.preventDefault(e);props.onToggleCompleted();}}>✓ </button> <span>{props.completed?<del>{props.text}</del>:props.text}</span></div>;
