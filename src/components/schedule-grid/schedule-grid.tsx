import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEvent } from '../../slices/scheduleSlice';

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
	const columns = Array.from({ length: 7 }, (_, i) => i);
	const rows = Array.from({ length: 24 }, (_, i) => i);

	const activeTimeList: string[] | any = useSelector((state: any) => state.schedule.activeEventList);
	const selectedEvent: string | any = useSelector((state: any) => state.schedule.selectedEvent);
	const dispatch = useDispatch();

	return (
		<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '61px' }}>
			<div style={{ width: '70px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '28.5px', alignItems: 'center', color: 'grey' }}>
				{rows.map((row, index) => {
					return <div key={index}>{row < 10 ? `0${row}` : row}:00</div>
				})}
			</div>

			<GridContainer>
				{rows.map((row) => (
					<React.Fragment key={row}>
						{columns.map((column) => (
							<GridItem
								onClick={() => {
									dispatch(setSelectedEvent(null))
								}}
								$active={selectedEvent === `${row}-${column}`}
								key={`${row}-${column}`}
								id={`${row}-${column}`}
							>
								{activeTimeList.find((item: string) => item === `${row}-${column}`) ?
									<div
										onClick={(e) => {
											e.stopPropagation();
											dispatch(setSelectedEvent(`${row}-${column}` as string | any))
										}}
									/> :
									''}
							</GridItem>
						))}
					</React.Fragment>
				))}
			</GridContainer>
		</div >
	);
};