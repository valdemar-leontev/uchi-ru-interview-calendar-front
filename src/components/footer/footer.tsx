import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';

export const Footer = () => {

	const FooterWrapper = styled.section`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${appConstants.appearance.baseGrey};
      border-top: 2px solid #ececec;
      height: 60px;
      bottom: 0;
  `;

	return (
		<FooterWrapper>

		</FooterWrapper>
	)
}