import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({ setUser }) {
  // Retrieve user info from Redux store
  const { data: user } = useSelector((state) => state.user);

  // Function to handle logout
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear user data from localStorage or perform any necessary logout actions
      localStorage.removeItem("user");
      setUser(null); // Update the user state in your component
    }
  };

  return (
    <>
      <header className="fixed top-0 z-10 bg-white w-full">
        <div className="">
          {/* Creating top banner */}
          <div className="flex justify-between m-2 p-2 text-primary ">
            {/*  using tooltip to hover in logo  */}
            <div>
              <Link
                to="/home"
                className=" font-mono font-bold text-3xl has-tooltip hover:text-pink  "
              >
                JobsPortal
                <span className="tooltip rounded shadow-lg p-1 font-normal mt-8 text-sm text-yellow">
                  go to home
                </span>
              </Link>
              <Link to="/FAQ" className="hover:text-pink">
                FAQ
              </Link>
              <p>Username: {user?.username}</p>
              <p>Email: {user?.email}</p>
            </div>
           
            
            <div>
              {user ? (
                // Show logout button when user is logged in
                <>
                <div className=" flex flex-wrap gap-px text-xl">
              <>
                <Link
                  to="/charts"
                  className="mt-3 ml-10 sm:mr-2 hover:text-pink"
                >
                  Charts
                </Link>
                <Link to="/userprofile">Profile</Link>
              </>
            </div>
                <button
                  onClick={handleLogout}
                  className="mt-3 ml-2 hover:text-pink cursor-pointer"
                  >
                  Logout
                </button>
                  </>
              ) : (
                // Show login and register links when user is not logged in
                <>
                  <Link
                    to="/login"
                    className="mt-3 sm:mr-4 ml-3 hover:text-pink"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="border border-1 rounded-md p-2 ml-1 bg-primary text-white hover:bg-pink"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
