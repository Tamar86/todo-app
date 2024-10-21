import styled from 'styled-components';
import iconCheck from '../../../public/assets/icon-check.svg';
import { useTodo } from '../../context/TodoContext';

const InputContainer = styled.span`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	width: 1.5rem;
	height: 1.5rem;

	border-radius: 50%;

	&:hover {
		background: linear-gradient(to right, var(--Sky-Blue), var(--Purple-Blue));
		outline: none;
		border: none;
	}
`;

const Input = styled.input`
	position: absolute;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;

	width: 1.5rem;
	height: 1.5rem;
	border: ${({ $lightMode }) =>
		$lightMode
			? '2px solid var(--Light-Grayish-Blue)'
			: '2px solid var(--Very-Dark-Grayish-Blue)'};
	border-radius: 50%;
	cursor: pointer;
	background-color: ${({ $lightMode }) =>
		$lightMode
			? 'var(--Very-Light-Gray)'
			: 'var(--Very-Dark-Desaturated-Blue)'};
	z-index: 1000;

	&:hover {
		border: none;
		width: 1.4rem;
		height: 1.4rem;
	}

	&:checked {
		/* background: url('/assets/icon-check.svg') center center no-repeat, */
		/* linear-gradient(to right, var(--Sky-Blue), var(--Purple-Blue)); */
		/* background-position: center; */
		/* border: none; */
		/* background-size: 50% auto, cover; */
		background: linear-gradient(to right, var(--Sky-Blue), var(--Purple-Blue));
		background-color: transparent;
		border: none;
	}
`;

function Checkbox({ $completed, id }) {
	const { dispatch, lightMode } = useTodo();

	return (
		<InputContainer>
			<Input
				$lightMode={lightMode}
				type='checkbox'
				checked={$completed}
				onChange={e => {
					e.stopPropagation();
					dispatch({ type: 'item/complete', payload: id });
				}}
			/>
		</InputContainer>
	);
}

export default Checkbox;
