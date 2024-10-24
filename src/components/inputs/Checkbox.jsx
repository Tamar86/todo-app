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
	/* z-index: -1; */
	border-radius: 50%;

	&:hover {
		background: var(--Gradient-linear);
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
	/* z-index: 1; */

	&:hover {
		border: none;
		width: 1.4rem;
		height: 1.4rem;
	}

	&:checked {
		&& {
			background: url(${iconCheck}) center no-repeat, var(--Gradient-linear);

			background-size: 50% auto, cover;
			border: none;
		}
	}
`;

function Checkbox({ $completed, id }) {
	const { dispatch, lightMode } = useTodo();

	return (
		<InputContainer checked={$completed}>
			<Input
				$lightMode={lightMode}
				type='checkbox'
				checked={$completed}
				onChange={() => {
					dispatch({ type: 'item/complete', payload: id });
				}}
			/>
		</InputContainer>
	);
}

export default Checkbox;
