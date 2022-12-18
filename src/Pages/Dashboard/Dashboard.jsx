import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import SideBar from '../../layout/Dashboard/SideBar';
const Dashboard = () => {
    return (
        <>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center"> 
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet/>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-slate-700 text-white font-bold"> 
                    <li><Link to={'/dasboard'}>Blog List</Link></li> 
                    <li><Link to={'/dasboard/add-blog'}>Post Blog</Link></li>
                    <li className='bg-slate-800 rounded-full text-center'><Link to={'/'}>Back To Home</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Dashboard;