import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../Components/BlogCard';
import { GET_CONTENT } from '../../Redux/actionTypes';
const Home = () => {
    const blogs = useSelector(state=>state.content.blogs)
    const last = true;
    const first = true
    const dispatch = useDispatch();
    const url = 'http://localhost:5000/blogs';
    useEffect(() => {
      fetch(url)
      .then(res=>res.json())
      .then(data=>dispatch({type:GET_CONTENT,payload:data.data}))
      .catch(err=>console.log(err))
    }, []) 
    const activeClass = "!text-white bg-primary border-transparent";
    let content;
    
    if(blogs.length){
        content= blogs.map(blog=><BlogCard key={blog._id} blog={blog}/>)
    }
    
    return (
        <>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`text-slate-800 border border-slate-800 px-3 py-2 rounded-full font-semibold ${first? `${activeClass}`: ""} `}>
                    First Upload
                </button>
                <button className={`text-slate-800 border border-slate-800 px-3 py-2 rounded-full font-semibold ${last? `${activeClass}`: ""} `}>
                    Last Upload
                </button>
            </div>
            <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {content}
            </div>
        </>
    );
};

export default Home;