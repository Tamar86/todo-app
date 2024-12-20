import styled from 'styled-components';
import imgDesktopDark from '../../public/assets/bg-desktop-dark.jpg';
import imgDesktopLight from '../../public/assets/bg-desktop-light.jpg';
import imgMobileDark from '../../public/assets/bg-mobile-dark.jpg';
import imgMobileLight from '../../public/assets/bg-mobile-Light.jpg';
import { useTodo } from '../context/TodoContext';

const StyledImg = styled.img`
	width: 100%;
	height: 15rem;
`;

function Image() {
	const { lightMode } = useTodo();
	return (
		<div>
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
		</div>
	);
}

export default Image;
