import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import List from '../todoList/List';
import Buttons from '../buttons/Buttons';
import { useTodo } from '../../context/TodoContext';

const StyledTodoList = styled.div`
	display: grid;
	gap: 1.5rem;
`;

const ButtonsContainer = styled.div`
	&& {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 2rem;
		border-radius: 5px;

		background-color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Light-Gray)'
				: 'var(--Very-Dark-Desaturated-Blue)'};
	}
`;

function TodoList() {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
	const { lightMode } = useTodo();
	return (
		<StyledTodoList>
			<List />

			{isSmallScreen && (
				<ButtonsContainer $lightMode={lightMode}>
					<Buttons />
				</ButtonsContainer>
			)}
		</StyledTodoList>
	);
}

export default TodoList;
