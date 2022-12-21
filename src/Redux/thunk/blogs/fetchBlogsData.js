import { getAllBlogs } from "../../actionCreators/contentAction";

const fetchBlogData = ()=>{
    return async (dispatch,getState)=>{
        const res = await fetch('https://react-blog-server-production.up.railway.app/blogs')
        const data = await res.json();
        if(data.data.length){
            dispatch(getAllBlogs(data.data))
        }
    }
}
export default fetchBlogData