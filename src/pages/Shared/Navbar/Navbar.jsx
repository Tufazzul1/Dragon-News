import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink className="mr-3" to={'/'}>Home</NavLink></li>
        <li><NavLink className="mr-3" to={'/about'}>About</NavLink></li>
        <li><NavLink className="mr-3" to={'/career'}>Career</NavLink></li>
        <li><NavLink className="mr-3" to={'/login'}>Login</NavLink></li>
        <li><NavLink className="mr-3" to={'/register'}>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <CgProfile className="text-3xl" />

                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;