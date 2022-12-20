import { ADD_CONTENT, DELETE_CONTENT, GET_A_CONTENT, GET_CONTENT, UPDATE_CONTENT } from '../actionTypes';

const initalState = {
    blogs:[]
};

export const contentReducer = (state = initalState,action)=>{
    switch(action.type){
        case ADD_CONTENT:
            return{
                ...state,
                blogs:[...state.blogs,action.payload]
            }
        case GET_CONTENT:
            return{
                ...state,
                blogs:action.payload
            }
        case GET_A_CONTENT:
            return{
                ...state,
                blogs:state.blogs.includes(blog=>blog._id === action.payload._id)
            }
        case UPDATE_CONTENT:
            return{}
        case DELETE_CONTENT:
            return{
                ...state,
                blogs: state.blogs.filter(blog=>blog._id !== action.payload._id)
            }
        default: return state
    }
}

