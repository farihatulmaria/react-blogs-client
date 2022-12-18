import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from '../actionTypes';

const initalState = {
    blogs:[]
};

export const contentReducer = (state = initalState,action)=>{
    switch(action.type){
        case ADD_CONTENT:
            return{}
        case GET_CONTENT:
            return{
                ...state,
                blogs:action.payload
            }
        case UPDATE_CONTENT:
            return{}
        case DELETE_CONTENT:
            // const deletedBlog = state.blogs.includes(blog=> blog._id === action.payload._id);
            return{
                ...state,
                blogs:[...state.blogs]
            }
        default: return state
    }
}

