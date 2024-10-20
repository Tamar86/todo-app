import styled from 'styled-components';
import imgDesktopDark from '../assets/bg-desktop-dark.jpg';
import imgDesktopLight from '../assets/bg-desktop-light.jpg';
import imgMobileDark from '../assets/bg-mobile-dark.jpg';
import imgMobileLight from '../assets/bg-mobile-Light.jpg';
import { useTodo } from '../context/TodoContext';

const StyledImage = styled.picture``;

const StyledImg = styled.img`
	width: 100%;
	height: 15rem;
`;

function Image() {
	const { lightMode } = useTodo();
	return (
		<StyledImage>
			<source
				srcSet={!lightMode ? imgDesktopDark : imgDesktopLight}
				media='(min-width: 768px)'
			/>

			<source
				srcSet={!lightMode ? imgMobileDark : imgMobileLight}
				media='(max-width: 767px)'
			/>
			<StyledImg
				src={!lightMode ? imgDesktopDark : imgDesktopLight}
				alt='Background image'
			/>
		</StyledImage>
	);
}

export default Image;
