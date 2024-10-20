import styled from 'styled-components';
import { useTodo } from '../../context/TodoContext';

const StyledButton = styled.button`
	background-color: transparent;
	cursor: pointer;
	border: none;
	font-size: 0.8rem;
	font-family: 'Josefin Sans', sans-serif;

	color: ${({ active, type, $lightMode }) =>
		$lightMode && active && type !== 'all'
			? 'var(--Very-Dark-Grayish-Blue)'
			: !$lightMode && active && type !== 'all'
			? 'var(--Light-Grayish-hover-Blue)'
			: active && type === 'all'
			? 'var(--Bright-Blue)'
			: 'var(--Dark-Grayish-Blue)'};

	&:hover {
		color: ${({ type, $lightMode }) =>
			type === 'all'
				? 'var(--Bright-Blue)'
				: $lightMode
				? 'var(--Very-Dark-Grayish-Blue)'
				: 'var(--Light-Grayish-hover-Blue)'};
	}
`;
function Button({ children, onClick, type, active }) {
	const { lightMode } = useTodo();

	return (
		<StyledButton
			onClick={onClick}
			type={type}
			$lightMode={lightMode}
			active={active ? 'true' : undefined}
		>
			{children}
		</StyledButton>
	);
}

export default Button;
