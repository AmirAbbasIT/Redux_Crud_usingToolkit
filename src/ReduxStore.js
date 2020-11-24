
export const createStore=()=>{

    var state={name:"Amir"};
    var listners=[];

    const getState=()=>{
        return state;
    }    

    const dispatch=(action)=>{
        state.name=action;

          listners.forEach(element => {
            element();
        });
    }

    const subscribe=(event)=>{
        listners.push(event);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}