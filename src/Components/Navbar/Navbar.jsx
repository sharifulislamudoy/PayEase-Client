import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/features', label: 'Features' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className='backdrop-blur-sm bg-black/60 shadow-sm sticky top-0 z-50'>
            <div className="navbar w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-white"
                        >
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className={`border-b border-gray-600 last:border-none`}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : ''}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">PayEase</a>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal bg-gray-900 rounded-full px-2 text-white">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-8 rounded-full transition duration-200 hover:bg-gray-800 ${
                                            isActive ? 'bg-gray-700' : ''
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <a className="btn rounded-full px-9 text-[#3A59D1] bg-gray-900 shadow-2xl">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;






// import React from 'react';
// import { NavLink } from 'react-router';

// const Navbar = () => {
//     return (
//         <div className='backdrop-blur-sm bg-black/60 shadow-sm inset-0 sticky top-0 z-50'>
//             <div className="navbar  w-11/12 mx-auto">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             <li className='px-3'><NavLink to={'/'}>Home</NavLink></li>
//                             <li className='px-3'><NavLink to={''}>About</NavLink></li>
//                             <li className='px-3'><NavLink to={''}>Features</NavLink></li>
//                             <li className='px-3'><NavLink to={''}>Contact</NavLink></li>
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">PayEase</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal bg-gray-900 rounded-full px-1 ">
//                         <li className='px-3'><NavLink to={'/'}>Home</NavLink></li>
//                         <li className='px-3'><NavLink to={''}>About</NavLink></li>
//                         <li className='px-3'><NavLink to={''}>Features</NavLink></li>
//                         <li className='px-3'><NavLink to={''}>Contact</NavLink></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Login</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;