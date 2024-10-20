import { nanoid } from 'nanoid';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
	todoList: [],
	numItems: 0,
	lightMode: false,
	filteredList: 'all',
	btnActive: null,
};

function todoReducer(state, action) {
	switch (action.type) {
		case 'add/listItem':
			return {
				...state,
				todoList: [
					...state.todoList,
					{ name: action.payload, completed: false, id: nanoid() },
				],
			};

		case 'item/complete': {
			const id = action.payload;
			return {
				...state,
				todoList: state.todoList.map(item =>
					item.id === id ? { ...item, completed: !item.completed } : item
				),
			};
		}
		case 'clear/completed':
			return {
				...state,
				todoList: state.todoList.filter(item => !item.completed),
				btnActive: null,
			};

		case 'delete/item': {
			const id = action.payload;
			return {
				...state,
				todoList: state.todoList.filter(item => item.id !== id),
			};
		}

		case 'change/mode':
			return { ...state, lightMode: !state.lightMode };

		case 'update/list':
			return {
				...state,
				todoList: action.payload,
			};

		case 'filtered/list':
			return {
				...state,
				filteredList: action.payload,
				btnActive: action.payload,
			};

		default:
			return state;
	}
}
const TodoContext = createContext();

function TodoProvider({ children }) {
	const [{ todoList, numItems, lightMode, filteredList, btnActive }, dispatch] =
		useReducer(todoReducer, initialState);
	return (
		<TodoContext.Provider
			value={{
				todoList,
				numItems,
				lightMode,
				filteredList,
				btnActive,
				dispatch,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

function useTodo() {
	const context = useContext(TodoContext);
	if (context === undefined)
		throw new Error('TodoContext was used outside TodoProvider');
	return context;
}

export { TodoProvider, TodoContext, useTodo };
