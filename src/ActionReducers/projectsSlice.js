import {
    createSlice
} from '@reduxjs/toolkit';


const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: []
    },
    reducers: {

        AddProjectAction: (state, action) => {
            state.projects.push(action.payload);
        },
        DeleteProjectAction: (state, action) => {

            state.projects = state.projects.filter(p => p.id !== action.payload);
        },
        UpdateProjectAction:(state,action)=>{
            const index=state.projects.findIndex(p=>p.id===action.payload.id);
            console.log(index);
            state.projects[index]=action.payload;
        }
    }
});

export const {AddProjectAction,DeleteProjectAction,UpdateProjectAction} =projectsSlice.actions;
export default projectsSlice.reducer;