import styled from 'styled-components';
import { Header } from './components/header/header'
import { appConstants } from './constants/app-constants';
import { DaysTimeline } from './components/days-timeline/days-timeline';
import { Footer } from './components/footer/footer';
import { ScheduleGrid } from './components/schedule-grid/schedule-grid';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: ${appConstants.appearance.baseWhite};
`;

export const App = () => {
	return (
		<Wrapper>
			<Header />
			<DaysTimeline />
			<ScheduleGrid />
			<Footer />
		</Wrapper>
	)
}
