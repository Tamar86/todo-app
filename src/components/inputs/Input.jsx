import styled from 'styled-components';
import { useTodo } from '../../context/TodoContext';

const StyledInput = styled.input`
	width: 90%;
	height: 3rem;
	font-weight: 700;
	color: ${({ $lightMode }) =>
		$lightMode ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue)'};
	background-color: ${({ $lightMode }) =>
		$lightMode
			? 'var(--Very-Light-Gray)'
			: 'var(--Very-Dark-Desaturated-Blue)'};
	border: none;
	outline: none;
	font-size: 18px;
	caret-color: var(--Bright-Blue);
	text-indent: 10px;

	&:-webkit-autofill {
		-webkit-box-shadow: ${({ $lightMode }) =>
			$lightMode
				? '0 0 0px 1000px var(--Very-Light-Gray) inset'
				: '0 0 0px 1000px var(--Very-Dark-Desaturated-Blue) inset'};
		box-shadow: ${({ $lightMode }) =>
			$lightMode
				? '0 0 0px 1000px var(--Very-Light-Gray) inset'
				: '0 0 0px 1000px var(--Very-Dark-Desaturated-Blue) inset'};
		background-color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Light-Gray) !important'
				: 'var(--Very-Dark-Desaturated-Blue) !important'};
		color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Dark-Grayish-Blue) !important'
				: 'var(--Light-Grayish-Blue) !important'};

		transition: color 1000s ease-in-out;
	}
	/* transition: background-color 5000s ease-in-out 0s; */

	&:-webkit-autofill:focus {
		-webkit-box-shadow: ${({ $lightMode }) =>
			$lightMode
				? '0 0 0px 1000px var(--Very-Light-Gray) inset'
				: '0 0 0px 1000px var(--Very-Dark-Desaturated-Blue) inset'};
		box-shadow: ${({ $lightMode }) =>
			$lightMode
				? '0 0 0px 1000px var(--Very-Light-Gray) inset'
				: '0 0 0px 1000px var(--Very-Dark-Desaturated-Blue) inset'};

		color: ${({ $lightMode }) =>
			$lightMode
				? 'var(--Very-Dark-Grayish-Blue) !important'
				: 'var(--Light-Grayish-Blue) !important'};
		transition: color 1000s ease-in-out;
	}

	&::placeholder {
		font-family: 'Josefin Sans', sans-serif;
		font-size: 18px;
	}
`;

function Input({ register }) {
	const { lightMode } = useTodo();
	return (
		<StyledInput
			$lightMode={lightMode}
			type='text'
			placeholder='Create a new todo'
			{...register('value', {
				required: 'This field is required',
			})}
		/>
	);
}

export default Input;
