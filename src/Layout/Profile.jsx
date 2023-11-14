import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// import { FiShoppingCart, } from 'react-icons/fi';
// import { MdEvent } from 'react-icons/md';
// import { BiNews } from 'react-icons/bi';
// import { FaBloggerB} from 'react-icons/fa';
const Profile = () => {
    return (
        <div className='bg-green-400'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden md:hidden lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <Outlet></Outlet>
                        
                        <li><Link to='postjob'><img className='h-8 w-8 ' src="https://i.ibb.co/gybz3P3/job.png" alt="salary" />Post a Job</Link></li>
                        <li><Link to='postresearchpaper'><img className='h-8 w-8 ' src="https://i.ibb.co/qYbmtvw/analysis.png " alt="salary" />Post a Research Paper</Link></li>

                        <li><Link to='postblog'><img className='h-8 w-8 ' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="salary" />Post a blog</Link></li>
                        <li><Link to='postnews'><img className='h-8 w-8 ' src="https://i.ibb.co/GVWwRYw/news.png " alt="salary" />Post a news</Link></li>
                        <li><Link to='postevent'> <img className='h-8 w-8 ' src="https://i.ibb.co/sPvGs89/calendar.png " alt="salary" /> a events</Link></li>
                        <li><Link to='postscholarship'><img className='h-8 w-8 ' src="https://i.ibb.co/ZgYCy1B/scholarship.png " alt="salary" />Post a scholarship</Link></li>
                        <li><Link to='updateprofile'><img className='h-8 w-8 ' src="https://i.ibb.co/mhq2T4p/update-user.png " alt="salary" />Update Profile</Link></li>

                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
