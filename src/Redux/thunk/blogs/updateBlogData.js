import { updateABlog } from "../../actionCreators/contentAction";

const updateBlogData =(blogData)=>{
    return async (dispatch,getState)=>{
        const res = await fetch(``,{
            method:'PATCH',
            body:blogData,
            headers:{
                'Content-type':"application/json"
            }
        })
        const data = res.json();
        if(data){
            dispatch(updateABlog(blogData))
        }
    }
}

export default updateBlogData