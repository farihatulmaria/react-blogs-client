import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_CONTENT } from '../../Redux/actionTypes';
const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const submit = (data) => {
      const {Title,image,subject} = data
      const blog = {
          Title: Title,
          image:image,
          Descri:{
            title:subject,
            content:{
              
            }
          }
      };
      return dispatch({type:ADD_CONTENT,payload:blog})
    };
    return (
     <div className='flex justify-center items-center h-full '>
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
          onSubmit={handleSubmit(submit)}
        >
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='Title'>
              Title
            </label>
            <input type='text' id='Title' className="border py-2 border-grey-300" {...register("Title", {required:true})} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Image
            </label>
            <input type='text' className="border py-2 border-grey-300" name='image' id='image' {...register("image", {required:true})} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Subject
            </label>
            <input type='text' className="border py-2 border-grey-300" name='subject' id='subject' {...register("subject", {required:true})} />
          </div>
          <div className='flex flex-col w-full max-w-xs'></div>
          <div className='flex flex-col w-full max-w-full'>
            <label className='mb-2' htmlFor='keyFeature1'>
              Key Feature 1
            </label>
            <textarea
              type='text'
              name='keyFeature1' 
              className="border py-2 border-grey-300" 
              id='keyFeature1'
              {...register("keyFeature1", {required:true})}
            />
          </div>
          <div className='flex justify-between items-center w-full'>
            <button
              className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 '
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddBlog;