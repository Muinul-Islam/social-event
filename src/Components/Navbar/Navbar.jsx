/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        setUser(null);
        swal("Success", "You Logged Out Successfully", "success");
      })
      .catch((error) => {
        swal("ERROR!", error.message, "error");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li>
        <NavLink to="/servicePage">Services</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold"
          >
            Social<span className="text-red-500">Events</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <p className="mr-5 hidden sm:block">{user.email}</p>
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
