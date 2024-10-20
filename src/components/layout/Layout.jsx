import styled from 'styled-components';
import Image from '../Image';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { useTodo } from '../../context/TodoContext';

const StylesLayout = styled.div`
	position: relative;
	background-color: ${({ $lightMode }) =>
		$lightMode ? 'var(--Very-Light-Grayish-Blue)' : 'var(--Very-Dark-Blue)'};
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	height: fit-content;
	overflow-y: scroll;
`;

const BackgroundImageContainer = styled.div`
	position: relative;
	width: 100%;
	z-index: 1;
`;

const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 45%;
	gap: 2rem;
	top: 10%;
	z-index: 2;

	@media (max-width: 1024px) {
		width: 80%;
	}

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function Layout() {
	const { lightMode } = useTodo();
	return (
		<StylesLayout $lightMode={lightMode}>
			<BackgroundImageContainer>
				<Image />
			</BackgroundImageContainer>
			<Container>
				<Header />
				<Main />
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</Container>
		</StylesLayout>
	);
}

export default Layout;
