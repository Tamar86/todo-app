import styled from 'styled-components';
import imgSun from '../../assets/icon-sun.svg';
import imgMoon from '../../assets/icon-moon.svg';
import Button from '../buttons/Button';
import { useTodo } from '../../context/TodoContext';

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;
const Heading = styled.h1`
	color: ${({ $lightMode }) =>
		$lightMode ? 'var(--Very-Light-Gray)' : 'var(--Light-Grayish-Blue)'};
	letter-spacing: 4px;
	font-size: 2rem;
	letter-spacing: 1rem;
`;

function Header() {
	const { dispatch, lightMode } = useTodo();

	function handleChangeMode() {
		dispatch({ type: 'change/mode' });
	}
	return (
		<StyledHeader>
			<Heading $lightMode={lightMode}>TODO</Heading>
			<Button onClick={handleChangeMode}>
				{!lightMode ? <img src={imgSun} /> : <img src={imgMoon} />}
			</Button>
		</StyledHeader>
	);
}

export default Header;
