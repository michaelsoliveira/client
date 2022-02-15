import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '.'

export type EmpresaSate = {
    id: number;
    nome: string;
    responsavel: string;
}

export type ProjectState = {
    
    id: number;
    status: boolean;
    empresa: EmpresaSate;
    
}

const initialState: ProjectState = {
    id: 0,
    status: true,
    empresa: {
        id: 0,
        nome: '',
        responsavel: ''
    }
     
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        saveProject: (state, action: PayloadAction<ProjectState>) => {
            // const { id, status, empresa } = action.payload
            state.id = action.payload.id
            state.status = action.payload.status
            state.empresa = action.payload.empresa

        },
        reset: (state) => {
            state = initialState
        }
    }
})

export const { saveProject, reset } = projectSlice.actions

export const selectProject = (state: RootState) => state.project

export default projectSlice.reducer