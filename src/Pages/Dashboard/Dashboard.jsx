import React from 'react';
// import SideBar from '../../layout/Dashboard/SideBar';
import { AiTwotoneHome } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
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
                    <li><Link to={'/dashboard'}>Blog List</Link></li> 
                    <li><Link to={'add-blog'}>Post Blog</Link></li>
                    <li className=' mt-auto bg-slate-800 rounded-full text-center'><Link to={'/'}>Back To Home <AiTwotoneHome/></Link></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Dashboard;