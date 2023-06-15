import styled from 'styled-components';
import { appConstants } from '../../constants/app-constants';
import { AddIcon } from '../../icons/icons';
import { useCallback } from 'react';
import { convertDate, prepareDate, validateDate } from '../../helpers/date-helper';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../slices/scheduleSlice';

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	position: sticky;
	top: 0;
	background-color: ${appConstants.appearance.baseWhite};
	height: 6rem;
`;

const Title = styled.span`
	font-size: 1.5rem;
`;

export const Header = () => {

	const dispatch = useDispatch();

	const onCreateEventClickHandler = useCallback(() => {
		const newEventTime = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');

		if (!newEventTime) {
			return;
		}

		const preparedDate = prepareDate(newEventTime);

		const isValid = validateDate(preparedDate);

		if (isValid) {
			const convertedDate = convertDate(preparedDate);
			dispatch(createEvent(convertedDate));
		} else {
			alert('Invalid date format!');
		}
	}, [dispatch]);

	return (
		<Wrapper>
			<Title>{appConstants.title}</Title>
			<AddIcon
				onClick={onCreateEventClickHandler}
				size={appConstants.appearance.bigIconSize}
				color={appConstants.appearance.baseRed}
			/>
		</Wrapper>
	)
}
