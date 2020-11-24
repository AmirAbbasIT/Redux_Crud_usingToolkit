import './App.css';
import {configureStore} from '@reduxjs/toolkit';
import ProjectReducer ,{UpdateProjectAction,AddProjectAction,DeleteProjectAction} from './ActionReducers/projectsSlice';
import {createStore} from 'redux';
function App() {

  const store =configureStore({
    reducer:ProjectReducer
  })

  store.dispatch(AddProjectAction({id:1,title:"My first Project"}));
  store.dispatch(AddProjectAction({id:2,title:"My Second Project"}));
  store.dispatch(UpdateProjectAction({id:2,title:"My Second Project and Third Commit"}));
  store.dispatch(DeleteProjectAction(1));
  console.log(store.getState());

  const sum=a=>b=>c=>a+b+c;
  console.log(sum(10)(20)(20));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
