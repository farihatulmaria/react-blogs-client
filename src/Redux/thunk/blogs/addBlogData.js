import { postABlog } from "../../actionCreators/contentAction";

const addBlogData = (blog)=>{
    return async (dispatch,getState)=>{
        const res = await fetch('',{
            method:"POST",
            body: JSON.stringify(blog),
            headers:{
                "Content-type":"application/json"
            },
        })
        const data = await res.json();
        if(data.acknowledged){
            dispatch(postABlog({
                _id:data.insertedId,
                ...blog
            }))
        }
    }
}
export default addBlogData