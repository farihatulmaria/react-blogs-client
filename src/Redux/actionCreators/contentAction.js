import { ADD_CONTENT, DELETE_CONTENT, GET_A_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes"

export const getAllBlogs = (data)=>{
    return {
        type:GET_CONTENT,
        payload:data
    }
}
export const getABlog = (blog)=>{
    return {
        type:GET_A_CONTENT,
        payload:blog
    }
}
export const postABlog = (blog)=>{
    return {
        type:ADD_CONTENT,
        payload:blog
    }
}
export const updateABlog = (blog)=>{
    return {
        type:UPDATE_CONTENT,
        payload:blog
    }
}

export const deleteABlog = (blog)=>{
    return {
        type:DELETE_CONTENT,
        payload:blog
    }
}
