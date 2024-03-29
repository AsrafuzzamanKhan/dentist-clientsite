import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>
        <li><NavLink to="/">Home </NavLink></li>
        <li> <NavLink to="/appointment">Appointment</NavLink></li>
        {user?.uid ? <>

            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><button onClick={handleLogout}>Sign out</button></li>
        </>
            :
            <li><NavLink to="/login">Login</NavLink></li>
        }

    </React.Fragment>
    return (
        <div className='bg-black text-white  fixed  w-full top-0 z-40 py-3'>
            <div className='container mx-auto '>
                <div className="navbar flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box bg-black w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Dentist</Link >
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-x-[5px]">
                            {menuItems}
                        </ul>
                    </div>

                    {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;