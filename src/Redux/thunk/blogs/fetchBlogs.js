import { getAllBlogs } from "../../actionCreators/contentAction";

const url = 'https://react-blog-server-production.up.railway.app/blogs';
const fetchBlogData = ()=>{
    return async (dispatch,getState)=>{
        const res = await fetch(url);
        const data = await res.json();
        if(data.data.length){
            dispatch(getAllBlogs(data.data))
        }
    }
}
export default fetchBlogData