import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
      <div className='px-auto '>
        <Navbar />
        <div className='max-w-7xl my-10 mx-auto'>
          <Outlet />
        </div>
      </div>
    );
};

export default Main;