import {createAction,createReducer,createSlice} from '@reduxjs/toolkit';


//Action Creators
export const AddProjectAction=createAction("AddProject");
export const DeleteProjectAction = createAction("DeleteProject");


///Reducters
const ProjectReducer=createReducer({projects:[]},{
    [AddProjectAction.type]:(state,action)=>{
        state.projects.push(action.payload);
    },
    [DeleteProjectAction.type]:(state,action)=>{
        
        state.projects=state.projects.filter(p=>p.id!==action.payload);
    }
});

export default ProjectReducer;