import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';
import { BackIcon, ForwardIcon } from '../../icons/icons';
import { getDayString, getFirstDayOfTheWeek, getMonthNameByNumber } from '../../helpers/date-helper';
import { useSelector } from 'react-redux';

const Wrapper = styled.section`
		display: flex;
		flex-direction: column;
		padding: 0.8rem 1.5rem;
    background-color: ${appConstants.appearance.baseGrey};
    border-bottom: 2px solid #ececec;
    border-top: 2px solid #ececec;
    padding-left: 60px;
    font-weight: 500;

    position: sticky;
    top: 6rem;
	`;

const WeekWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

const DayWrapper = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      & > :first-child {
        font-size: 12px;
      }
  `;

const DayNumber = styled.section<{ $active?: boolean; }>`
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      width: 30px;
      height: 30px;
      background-color: ${props => props.$active ? appConstants.appearance.baseRed : "initial"};
      color: ${props => props.$active ? "white" : "initial"};
  `;

const MonthWrapper = styled.section`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
      padding: 0 0.3rem;
  `;

export const DaysTimeline = () => {
  const selectedYear: string[] | any = useSelector((state: any) => state.schedule.selectedYear);
  const selectedMonth: string[] | any = useSelector((state: any) => state.schedule.selectedMonth);

  return (
    <Wrapper>
      <WeekWrapper>
        {[0, 1, 2, 3, 4, 5, 6].map((i, index) => {
          const firstDayOfWeek = getFirstDayOfTheWeek();
          const nextDay = new Date(firstDayOfWeek);
          firstDayOfWeek.setDate(nextDay.getDate() + i);
          const isActive = firstDayOfWeek.getDate() === (new Date()).getDate();

          return <DayWrapper key={index}>
            <div className='day-name'>{getDayString(firstDayOfWeek).charAt(0)}</div>
            <DayNumber $active={isActive}>{firstDayOfWeek.getDate()}</DayNumber>
          </DayWrapper>
        })}
      </WeekWrapper>

      <MonthWrapper>
        <BackIcon size={appConstants.appearance.normalIconSize} color={appConstants.appearance.baseRed} />
        <span>{getMonthNameByNumber(selectedMonth)} {selectedYear}</span>
        <ForwardIcon size={appConstants.appearance.normalIconSize} color={appConstants.appearance.baseRed} />
      </MonthWrapper>
    </Wrapper>
  )
}
