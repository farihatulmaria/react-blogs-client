import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../Components/BlogCard';
const Home = () => {
    const blogs = useSelector(state=>state.content.blogs)
    
    // const activeClass = "!text-white bg-primary border-transparent";
    let content;
    
    if(blogs?.length){
        content= blogs.map(blog=><BlogCard key={blog._id} blog={blog}/>)
    }
    
    return (
        <>
            {/* <div className='mb-10 flex justify-end gap-5'>
                <button className={`text-slate-800 border border-slate-800 px-3 py-2 rounded-full font-semibold ${first? `${activeClass}`: ""} `}>
                    First Upload
                </button>
                <button className={`text-slate-800 border border-slate-800 px-3 py-2 rounded-full font-semibold ${last? `${activeClass}`: ""} `}>
                    Last Upload
                </button>
            </div> */}
            <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {content}
            </div>
        </>
    );
};

export default Home;