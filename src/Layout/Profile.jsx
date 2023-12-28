import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import useAdmin from '../Hook/useAdmin';

const Profile = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden md:hidden lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-orange-200 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Common links for all users */}
                        <li><Link to='orders'><img className='h-8 w-8 ' src="https://i.ibb.co/HzsfNCv/image.png" alt="salary" />Orders</Link></li>
                        {/* Links visible only for admin */}
                        {isAdmin && (
                            <>
                                <li><Link to='adminhome'><img className='h-8 w-8 ' src="https://i.ibb.co/3frnPGp/image-removebg-preview-3.png" alt="salary" />Admin Home</Link></li>
                                <li><Link to='additems'><img className='h-8 w-8 ' src="https://i.ibb.co/wMRZtw3/image.png " alt="salary" />Add Items</Link></li>
                                <li><Link to='manageitem'><img className='h-8 w-8 ' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="salary" />Manage Items</Link></li>

                                <li><Link to='allusers'><img className='h-8 w-8 ' src="https://i.ibb.co/stssN8z/image.png" alt="salary" />All Users</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
