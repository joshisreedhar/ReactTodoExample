import React from 'react'
import {Todo} from './Todo'

export const TodoList = (props)=> <div><ul><li><Todo completed={false} text="Todo 1" /></li><li><Todo completed={true} text="Todo 2"/></li></ul></div>;