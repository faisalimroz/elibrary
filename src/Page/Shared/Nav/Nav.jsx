import './Nav.css'
const Nav = () => {
    return (
        <div>
            <div className="navbar bg-green-100">
                <div className="flex items-center">
                    <img src='https://i.ibb.co/r47qDyS/fahim.png' alt='' className='logo' />
                  
                </div>
                <div className="form-control  mx-auto text-center"> {/* Added text-center */}
                    <div className="input-group search-field-container">
                        <input type="text" placeholder="Search…" className="input input-bordered search" />
                        <button className="btn btn-square bg-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;