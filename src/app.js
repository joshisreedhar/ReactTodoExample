import React from 'react';
import {TodoList} from './TodoList'
import PropTypes from 'prop-types';

export const App = (props, context) =><div> <h1>Todos</h1> <TodoList  todos={context.store.getState().todos}
onToggleCompletedTodo={ (index) => context.store.dispatch({type:'TOGGLE_COMPLETED', index})}/></div>;

App.contextTypes = { store: PropTypes.object};
