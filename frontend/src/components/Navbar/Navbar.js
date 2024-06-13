import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 w-auto" data-theme="winter">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
            <a className="text-xl font-extrabold flex">
              {" "}
              <img src={logo} alt="logo" className="mr-2 w-24" />
              wow.resume
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Resume</summary>
                <ul className="p-2 w-80 font-extrabold">
                  <li>
                    <a className="flex flex-col items-start">
                      <a>Resume Builder</a>
                      <a className="font-light">
                        Create and format resume with our AI Editor
                      </a>
                    </a>
                  </li>
                  <li>
                    <a className="flex flex-col items-start">
                      <a>Resume Samples</a>
                      <a className="font-light">
                        Build job-tailored resume with our sample
                      </a>
                    </a>
                  </li>
                  <li>
                    <a className="flex flex-col items-start">
                      <a>How to write a Resume</a>
                      <a className="font-light">
                        Explore article with personalized insights
                      </a>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-5">
          <Link to="signIn" className="mr-5 font-bold cursor-pointer">
            Sign In
          </Link>
          <Link
            to="signUp"
            className="btn btn-outline btn-primary"
            style={{ height: "2.4rem", minHeight: "2.4rem" }}
          >
            Get Started
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
