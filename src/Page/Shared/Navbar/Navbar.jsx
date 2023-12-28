import { Link } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const Navbar = () => {
   
    const handleLogout = () => {
       logOut()
     
       .catch((error)=>{
        console.log(error)
       })
    }
    const {logOut}=useContext(AuthContext)
    const {user}=useContext(AuthContext)
    
    console.log('phoyo',user);
    
    return (
        <div>
              <div className="navbar bg-green-100 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                           
                            <li><Link to='/fiction'>Fiction</Link></li>
                            <li><Link to='/nonfiction'>Nonfiction</Link></li>
                            <li><Link to='/kids'>Kids</Link></li>
                            <li><Link to='/novel'> Novel</Link></li>
                            <li><Link to='/biography'>Biography</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                           
                           
                           {/* {
                               user?.uid? <li><button className='signout' onClick={handleLogout}>Sign out</button></li>: <li><Link to='/login'>Login</Link></li>
                           } */}
                           {
                                    user?.uid ? (
                                        <div  className="dropdown dropdown-end  h-20">
                                            <label  tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }


                        </ul>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex " >
                    <ul className="menu menu-horizontal  " id='navlist'>
                    <li><Link to='/home'>Home</Link></li>
                       
                  
                            <li><Link to='/fiction'>Fiction</Link></li>
                            <li><Link to='/nonfiction'>Nonfiction</Link></li>
                            <li><Link to='/kids'>Kids</Link></li>
                            <li><Link to='/novel'> Novel</Link></li>
                            <li><Link to='/biography'>Biography</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                           
                           {/* {
                               user?.uid? <li><button className='signout' onClick={handleLogout}>Sign out</button></li>: <li><Link to='/login'>Login</Link></li>
                           } */}
                           {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end  ">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full ">
                                                    <img src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }
                          

                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;