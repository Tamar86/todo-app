import styled from 'styled-components';

const StyledFooter = styled.p`
	&& {
		color: var(--Dark-Grayish-Blue);
		font-size: 14px;
		margin-bottom: 3rem;
		padding-top: 1rem;
	}
`;

function Footer() {
	return <StyledFooter>Drag and drop to reorder list</StyledFooter>;
}

export default Footer;
