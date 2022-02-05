import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    message: ''
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<any>) => {
            state.message = action.payload
        },
        clearMessage: () => {
            return { message: '' }
        }
    }
})

const { reducer, actions } = messageSlice

export const { setMessage, clearMessage } = actions

export default reducer;