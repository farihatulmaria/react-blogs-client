import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../Components/BlogCard';
import { GET_CONTENT } from '../../Redux/actionTypes';
const Home = () => {
    const blogs = useSelector(state=>state.content.blogs)
    console.log(blogs);
    const dispatch = useDispatch();
    const url = 'http://localhost:5000/blogs';
    useEffect(() => {
      fetch(url)
      .then(res=>res.json())
      .then(data=>dispatch({type:GET_CONTENT,payload:data.data}))
      .catch(err=>console.log(err))
    }, []) 

    let content;
    
    if(blogs.length){
        content= blogs.map(blog=><BlogCard key={blog._id} blog={blog}/>)
    }
    return (
        <>
            <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {content}
            </div>
        </>
    );
};

export default Home;