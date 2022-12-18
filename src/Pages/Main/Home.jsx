import React, { useEffect, useState } from 'react';
import BlogCard from '../../Components/BlogCard';

export let allBlogs ;
const Home = () => {
    const [blogs, setBlogs] = useState({});
    allBlogs = blogs;
    const url = 'http://localhost:5000/blogs';
    useEffect(() => {
      fetch(url)
      .then(res=>res.json())
      .then(data=>setBlogs(data.data))
      .catch(err=>console.log(err))
    }, []) 
    let content;
    if(blogs.length){
        content= blogs.map(blog=><BlogCard key={blog._id} blog={blog}/>)
    }
    return (
        <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {
                content
            }
        </div>
    );
};

export default Home;