import React from 'react';
import styled from 'styled-components';

const CalendarGridContainer = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  grid-template-rows: repeat(24, 1fr);
  grid-gap: 1px;
`;

const HourColumn = styled.div`
  grid-column: 1;
  grid-row: span 24;
`;

const HourLabel = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1px;
`;

const GridCell = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
`;

const CalendarGrid = () => {
	const hoursOfDay = Array.from(Array(24).keys());
	const daysOfWeek = Array.from(Array(7).keys());

	return (
		<CalendarGridContainer>
			<HourColumn>
				{hoursOfDay.map((hour) => (
					<HourLabel key={hour}>{hour}:00</HourLabel>
				))}
			</HourColumn>
			{daysOfWeek.map((day) => (
				<DayColumn key={day}>
					{hoursOfDay.map((hour) => (
						<GridCell key={`${day}-${hour}`} />
					))}
				</DayColumn>
			))}
		</CalendarGridContainer>
	);
};

export default CalendarGrid;