import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Checkbox from '../inputs/Checkbox';
import Button from '../buttons/Button';
import iconCross from '../../../public/assets/icon-cross.svg';
import { useTodo } from '../../context/TodoContext';

const ListItemContainer = styled.div`
	&& {
		display: grid;
		grid-template-columns: 1fr 10fr 1fr;
		max-width: 100%;
		align-items: center;
		justify-content: space-between;
		border-bottom: ${({ $lightMode }) =>
			$lightMode
				? '2px solid var(--Light-Grayish-Blue)'
				: '2px solid var(--Very-Dark-Grayish-Blue)'};
		padding: 1rem 1.5rem;
		gap: 1rem;
		touch-action: none;
		cursor: pointer;

		button {
			opacity: 0;
			transition: opacity 0.3s ease; /* Smooth transition */
			margin-left: 1rem;
		}

		&:hover button {
			opacity: 1;
			margin-left: 1rem;
		}
	}
`;

const StyledListItem = styled.li`
	list-style: none;
	font-weight: 700;
	width: 100%;
	text-decoration: ${({ $completed }) =>
		$completed === 'true' ? 'line-through' : 'none'};
	color: ${({ $completed }) =>
		$completed === 'true'
			? 'var(--Very-Dark-Grayish-Blue)'
			: 'var(--Dark-Grayish-Blue)'};
`;

function ListItem({ name, id, completed }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });
	const style = { transition, transform: CSS.Transform.toString(transform) };
	const { dispatch, lightMode, todoList } = useTodo();

	return (
		<ListItemContainer style={style} ref={setNodeRef}>
			<Checkbox $lightMode={lightMode} id={id} $completed={completed} />
			<StyledListItem
				{...attributes}
				{...listeners}
				$completed={completed.toString()}
			>
				{name}
			</StyledListItem>

			<Button
				onClick={e => {
					e.stopPropagation();
					dispatch({ type: 'delete/item', payload: id });
				}}
			>
				<img src={iconCross} />
			</Button>
		</ListItemContainer>
	);
}

export default ListItem;
