import { FETCHED_CONTENT } from "../actionTypes"

export const getAllBlogs = (data)=>{
    return {
        type:FETCHED_CONTENT,
        payload:data
    }
}