import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants'
import { AddIcon } from '../../icons/icons'

export const Header = () => {
	const Wrapper = styled.section`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
	`;

	const Title = styled.span`
		font-size: 1.5rem;
	`;

	return (
		<Wrapper>
			<Title>{appConstants.title}</Title>
			<AddIcon size={appConstants.appearance.bigIconSize} color={appConstants.appearance.baseRed} />
		</Wrapper>
	)
}
