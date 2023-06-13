import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';

const FooterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${appConstants.appearance.baseGrey};
  border-top: 2px solid #ececec;
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  
  span {
    padding: 0 1.5rem;
    color: ${appConstants.appearance.baseRed};
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <span>Today</span>
      <span>Delete</span>
    </FooterWrapper>
  )
}