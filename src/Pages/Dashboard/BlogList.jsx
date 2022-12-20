import React from 'react';
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { DELETE_CONTENT } from '../../Redux/actionTypes';
const BlogList = () => {
    const blogs = useSelector(state=>state.content.blogs);
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col justify-center items-center h-full w-full '>
        <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
          <header className='px-5 py-4 border-b border-gray-100'>
            <div className='font-semibold text-gray-800'>Blogs</div>
          </header>
          <div className='overflow-x-auto pb-3 px-3'>
            <table className='table-auto w-full'>
              <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                <tr>
                  <th></th>
                  <th className='p-2'>
                    <div className='font-semibold text-left'>Blog Title</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>Update</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {blogs?.map((blog) => (
                  <tr key={blog._id}>
                    <td className='p-2'>
                      <input type='checkbox' className='w-5 h-5' value='id-1' />
                    </td>
                    <td className='p-2'>
                      <div className='font-medium text-gray-800'>{blog.Title}</div>
                    </td>
                    <td className='p-2'>
                      <div className='flex justify-center'>
                        <button className='text-green-700'>
                          <MdOutlineSystemUpdateAlt size={30}/>
                        </button>
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className='flex justify-center'>
                        <button className='text-red-700' onClick={()=>dispatch({type:DELETE_CONTENT,payload:blog})}>
                          <MdDeleteForever size={30}/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className='btn btn-block mt-3'><Link to={'add-blog'}>Post a New Blog</Link></button>
          </div>
        </div>
      </div>
    );
};

export default BlogList;