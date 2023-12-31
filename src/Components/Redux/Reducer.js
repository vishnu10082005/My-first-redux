import Store from "./Redux";
export default function Reducer(state,action){
switch(action.type){
    case "todo":
        return{
            ...state,todo:[...state.todo,action.payload]
        }
        break;
        default:
            return state 
}
return state;
}
