import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';
import { AddIcon } from '../../icons/icons';

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	position: sticky;
	top: 0;
	background-color: ${appConstants.appearance.baseWhite};
`;

const Title = styled.span`
	font-size: 1.5rem;
`;

export const Header = () => {
	return (
		<Wrapper>
			<Title>{appConstants.title}</Title>
			<AddIcon size={appConstants.appearance.bigIconSize} color={appConstants.appearance.baseRed} />
		</Wrapper>
	)
}
