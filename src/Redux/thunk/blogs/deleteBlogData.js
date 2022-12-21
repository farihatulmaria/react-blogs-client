import { deleteABlog } from "../../actionCreators/contentAction";

const deleteBlogData = (id)=>{
    return async (dispatch,getState)=>{
        const res = await fetch(`https://react-blog-server-production.up.railway.app/blog/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':"application/json"
            }
        });
        const data = await res.json();
        if(data){
            dispatch(deleteABlog(id))
        }
    }
}


export default deleteBlogData;