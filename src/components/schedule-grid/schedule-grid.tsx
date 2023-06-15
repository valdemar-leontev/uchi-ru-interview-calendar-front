import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEvent } from '../../slices/scheduleSlice';
import { getFirstDayOfTheWeek } from '../../helpers/date-helper';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(24, 50px);
  width: 100%;
  margin-top: 20px;
`;

const GridItem = styled.div<{ $active: boolean }>`
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 2px;

  div {
	background-color: ${props => props.$active ? "#b3b7ff" : '#ebecff'};
	width: 100%;
	height: 100%;
  }
`;

export const ScheduleGrid = () => {
	const dayOfTheWeekList = Array.from({ length: 7 }, (_, i) => {
		const firstDayOfWeek = getFirstDayOfTheWeek();
		const nextDay = new Date(firstDayOfWeek);
		firstDayOfWeek.setDate(nextDay.getDate() + i)

		return String(firstDayOfWeek.getDate()).padStart(2, '0')
	});
	const hourList = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));

	const activeTimeList: string[] | any = useSelector((state: any) => state.schedule.activeEventList);
	const selectedEvent: string | any = useSelector((state: any) => state.schedule.selectedEvent);
	const selectedYear: string[] | any = useSelector((state: any) => state.schedule.selectedYear);
	const selectedMonth: string[] | any = useSelector((state: any) => state.schedule.selectedMonth);
	const dispatch = useDispatch();

	return (
		<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '61px' }}>
			<div style={{ width: '70px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '28.5px', alignItems: 'center', color: 'grey' }}>
				{hourList.map((row, index) => {
					return <div key={index}>{row}:00</div>
				})}
			</div>

			<GridContainer>
				{hourList.map((hour) => (
					<React.Fragment key={hour}>
						{dayOfTheWeekList.map((day) => (
							<GridItem
								onClick={() => {
									dispatch(setSelectedEvent(null))
								}}
								$active={selectedEvent === `${selectedYear}-${selectedMonth}-${day}-${hour}`}
								key={`${hour}-${day}`}
								id={`${hour}-${day}`}
							>
								{activeTimeList.find((eventTime: string) =>
									eventTime === `${selectedYear}-${selectedMonth}-${day}-${hour}`
								) ?
									<div
										onClick={(e) => {
											e.stopPropagation();
											dispatch(setSelectedEvent(`${selectedYear}-${selectedMonth}-${day}-${hour}` as string | any))
										}}
									/> :
									''
								}
							</GridItem>
						))}
					</React.Fragment>
				))}
			</GridContainer>
		</div >
	);
};