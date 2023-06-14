import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../slices/scheduleSlice'

export default configureStore({
    reducer: {
        schedule: scheduleReducer
    },
})