import { createSlice } from '@reduxjs/toolkit';

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        activeEventList: [
            '0-1', '0-5',
            '1-2', '1-3',
            '2-4', '2-6', '2-1',
            '3-6',
            '5-2',
            '8-5',
            '12-0', '12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7',
            '15-3',
            '17-4',
            '20-1',
        ] as string[],
        selectedEvent: null as string | null,
    },
    reducers: {
        deleteEvent: (state) => {
            state.activeEventList = state.activeEventList.filter(item => item !== state.selectedEvent);
        },

        setSelectedEvent: (state, event) => {
            state.selectedEvent = event.payload;
        }
    },
})

export const { deleteEvent, setSelectedEvent } = ScheduleSlice.actions;

export default ScheduleSlice.reducer;