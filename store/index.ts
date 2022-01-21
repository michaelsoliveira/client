import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import projectReducer from './projectSlice'
import userReducer from './userSlice'
import messageReducer from './messageSlice'

export const store = configureStore({
    reducer: {
        project: projectReducer,
        user: userReducer,
        message: messageReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<String>
>
