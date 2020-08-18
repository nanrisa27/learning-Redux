const reducer = (state = initialState, action) =>{
    /*if (action.type === "INCREMENT"){
        return{
            ...state, counter:state.counter + 1,
        }
    }*/
    return state;
};

const initialState={
    posts: [
        {id:"first", title:"sample title", content: "1", time:"current time"},
        {id:"second", title:"sample title", content: "1", time:"current time"},
        {id:"third", title:"sample title", content: "1", time:"current time"},
        {id:"fourth", title:"sample title", content: "1", time:"current time"},
        {id:"fith", title:"sample title", content: "1", time:"current time"},
        {id:"sixth", title:"sample title", content: "1", time:"current time"},
        
       
        
    ]
};


export default reducer;