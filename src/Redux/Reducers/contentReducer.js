import { ADD_CONTENT, DELETE_CONTENT, FETCHED_CONTENT, GET_CONTENT, UPDATE_CONTENT, } from '../actionTypes';

const initalState = {
    blogs:[]
};

export const contentReducer = (state = initalState,action)=>{
    switch(action.type){
        case FETCHED_CONTENT:
            return{
                ...state,
                blogs:[...state.blogs,action.payload]
            }
        case ADD_CONTENT:
            return{}
        case GET_CONTENT:
            return{}
        case UPDATE_CONTENT:
            return{}
        case DELETE_CONTENT:
            return{}
        default: return state
    }
}

