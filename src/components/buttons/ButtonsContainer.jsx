import styled from 'styled-components';
import { useTodo } from '../../context/TodoContext';
import Buttons from './Buttons';
import Button from './Button';

const Container = styled.div`
	&& {
		display: grid;
		grid-template-columns: 1fr 2fr;
		padding: 1rem 1.5rem;
		border-radius: 5px;
		background-color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Light-Gray)'
				: 'var(--Very-Dark-Desaturated-Blue)'};

		@media (max-width: 767px) {
			display: flex;
			justify-content: space-between;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NumItemsLeftContainer = styled.div`
	display: flex;
	color: var(--Dark-Grayish-Blue);
	font-size: 14px;
`;

const NumItemsLeft = styled.span`
	width: 0.5rem;
`;

function ButtonsContainer({ isLargeScreen, setFilteredList }) {
	const { todoList, dispatch, lightMode } = useTodo();
	const itemsLeft = todoList.filter(item => !item.completed);
	return (
		<Container $lightMode={lightMode}>
			<NumItemsLeftContainer>
				<NumItemsLeft>{itemsLeft.length}</NumItemsLeft>
				<span>items left</span>
			</NumItemsLeftContainer>
			<ButtonContainer>
				{isLargeScreen && <Buttons setFilteredList={setFilteredList} />}
				<Button onClick={() => dispatch({ type: 'clear/completed' })}>
					Clear Completed
				</Button>
			</ButtonContainer>
		</Container>
	);
}

export default ButtonsContainer;
