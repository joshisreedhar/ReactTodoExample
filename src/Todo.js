import React from 'react'


export const Todo = (props)=> <div><button>✓</button><span>{props.completed?<del>{props.text}</del>:props.text}</span></div>;
