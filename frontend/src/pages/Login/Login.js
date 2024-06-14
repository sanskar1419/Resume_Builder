import signImg from "../../assets/images/login.png";
import googleImg from "../../assets/images/google.png";
import facebookImg from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";
import childImg from "../../assets/images/Child_Holding_Resume.png";
import goback from "../../assets/images/goback.png";
function Login() {
  return (
    <div
      className="h-auto flex justify-end items-center overflow-scroll no-scrollbar bg-indigo-600 w-auto relative"
      data-theme="light"
      style={{ minHeight: "100vh" }}
    >
      <img src={signImg} className="absolute w-5/12 bottom-0 left-0" />
      <Link to="/">
        <button
          className="btn btn-primary flex items-center justify-center absolute top-0 right-0 bg-indigo-700 w-14"
          style={{ borderRadius: "75px 0 0 75px" }}
        >
          <img src={goback} className="w-8" />
        </button>
      </Link>
      <div
        className="w-3/5 h-screen bg-blue-50 flex items-center justify-center p-10 flex-col"
        style={{ borderRadius: "75px 0 0 75px" }}
      >
        <div className="flex justify-start items-start w-3/4 text-xl font-extrabold mb-5">
          Sign In Here
        </div>

        <div className="flex w-3/4 items-center mb-5">
          <div className="w-auto bg-slate-300 flex items-center mr-4 p-1 rounded-md cursor-pointer">
            <img src={googleImg} className="w-5 mr-2" />
            Sign In with Google
          </div>
          <div className="w-auto bg-slate-300 flex items-center p-1 rounded-md cursor-pointer">
            <img src={facebookImg} className="w-5 mr-2" loading="lazy" />
            Sign In with Facebook
          </div>
        </div>

        <div className="mb-5">----Or----</div>

        <input
          type="text"
          className="w-3/4 bg-transparent mb-3 outline-none"
          placeholder="Email Address"
          style={{ borderBottom: "2px solid grey" }}
        />

        <input
          type="password"
          className="w-3/4 bg-transparent mb-3 outline-none"
          placeholder="Password"
          style={{ borderBottom: "2px solid grey" }}
        />

        <button
          className="btn btn-primary bg-indigo-600 w-3/4 text-white mt-3 font-bold mb-4"
          style={{ height: "2.4rem", minHeight: "2.4rem" }}
        >
          Sign In
        </button>
        <div className="flex justify-start items-start w-3/4">
          Don't have a account?{" "}
          <Link
            to="/signUp"
            className="ml-1 text-indigo-600 font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
          <img
            src={childImg}
            className=" absolute"
            style={{ right: "0", bottom: "0", width: "12%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
