import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, setSelectedEvent } from '../../slices/scheduleSlice';

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
  max-width: 740px;
  
  span {
    padding: 0 1.5rem;
    color: ${appConstants.appearance.baseRed};
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Footer = () => {
  const selectedEvent: string | any = useSelector((state: any) => state.schedule.selectedEvent);
  const dispatch = useDispatch();

  return (
    <FooterWrapper>
      <span>Today</span>
      {
        selectedEvent === null ? null : <span onClick={() => {
          dispatch(deleteEvent());
          dispatch(setSelectedEvent(null));
        }}>Delete</span>
      }
    </FooterWrapper>
  )
}