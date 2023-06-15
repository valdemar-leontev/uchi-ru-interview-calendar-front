import { createSlice } from '@reduxjs/toolkit';

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        activeEventList: [
            '2023-06-12-00', '2023-06-13-00',
            '2023-06-2-01',
            '2023-06-17-08',
            '2023-06-12-12', '2023-06-13-12', '2023-06-14-12', '2023-06-15-12', '2023-06-16-12', '2023-06-17-12', '2023-06-18-12',
            '2023-06-15-15',
            '2023-06-17-17',
            '2023-06-13-20',
            '2023-06-17-05',
            '2023-06-14-04',
            '2023-06-18-00',
        ] as string[],
        selectedEvent: null as string | null,
        selectedYear: new Date().getFullYear(),
        selectedMonth: (new Date().getMonth() + 1).toString().padStart(2, '0'),
        selectedDay: new Date().getDate(),
    },
    reducers: {
        createEvent: (state, event) => {
            state.activeEventList = [...state.activeEventList, event.payload];
        },

        deleteEvent: (state) => {
            state.activeEventList = state.activeEventList.filter(event => event !== state.selectedEvent);
        },

        setSelectedEvent: (state, event) => {
            state.selectedEvent = event.payload;
        }
    },
})

export const { deleteEvent, setSelectedEvent, createEvent } = ScheduleSlice.actions;

export default ScheduleSlice.reducer;