import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTodo } from '../../context/TodoContext';
import styled from 'styled-components';
import ListItem from './ListItem';

//DND
import {
	closestCorners,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import ButtonsContainer from '../buttons/ButtonsContainer';

// STYLES

const StyledList = styled.div`
	display: flex;
	flex-direction: column;

	background-color: ${({ $lightMode }) =>
		$lightMode
			? 'var(--Very-Light-Gray)'
			: 'var(--Very-Dark-Desaturated-Blue)'};
	border-radius: 5px;

	&:hover {
		/* cursor: pointer; */
	}
`;

function List() {
	const { todoList, lightMode, filteredList } = useTodo();
	//Derived todo list
	const [items, setItems] = useState([]);

	//useMemo is needed otherwise I'm getting an infinite loop in useEffect

	const filteredTodoList = useMemo(() => {
		return todoList.filter(item => {
			if (filteredList === 'active') return !item.completed;
			if (filteredList === 'completed') return item.completed;
			return true;
		});
	}, [todoList, filteredList]);

	const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

	useEffect(() => {
		setItems(filteredTodoList);
	}, [filteredTodoList]);

	//dnd
	function getTaskPosition(id) {
		const position = items.findIndex(item => item.id === id);
		return position;
	}

	function handleDragEnd(event) {
		const { active, over } = event;
		if (active.id === over.id) return;
		setItems(items => {
			const originalPosition = getTaskPosition(active.id);
			const newPosition = getTaskPosition(over.id);
			return arrayMove(items, originalPosition, newPosition);
		});
	}

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
	);

	return (
		<StyledList $lightMode={lightMode}>
			<DndContext
				sensors={sensors}
				onDragEnd={handleDragEnd}
				collisionDetection={closestCorners}
			>
				<SortableContext items={items} strategy={verticalListSortingStrategy}>
					{items.map(item => (
						<ListItem
							name={item.name}
							key={item.id}
							id={item.id}
							completed={item.completed}
						/>
					))}
				</SortableContext>
			</DndContext>
			<ButtonsContainer isLargeScreen={isLargeScreen} />
		</StyledList>
	);
}

export default List;
