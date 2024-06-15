import stepImage1 from "../../assets/images/steps1.png";
import resume from "../../assets/images/resume2.png";
import cname from "../../assets/images/companyName.png";

import googleImg from "../../assets/images/google.png";
import facebookImg from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";
import childImg from "../../assets/images/Child_Holding_Resume.png";
import goback from "../../assets/images/goback.png";

function ResumeBuilderStep() {
  return (
    <div
      className="h-auto flex justify-end items-center overflow-scroll no-scrollbar bg-orange-600 w-auto relative"
      data-theme="light"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={stepImage1}
        className="absolute w-5/12 bottom-0 z-10"
        style={{ left: "18%" }}
      />

      <img
        src={resume}
        className="absolute w-5/12 bottom-0"
        style={{ left: "0%" }}
      />

      <div
        className="absolute top-4 bg-orange-500 shadow-xl"
        style={{ left: "0%", width: "45%", borderRadius: "0 30px 30px 0" }}
      >
        <img src={cname} className=" ml-3" style={{ width: "90%" }} />
      </div>

      <div
        className="w-1/2 h-screen bg-blue-50 flex items-center justify-center p-1 flex-col"
        style={{ borderRadius: "0 0 0 150px" }}
      >
        <h1 className=" w-3/4 text-3xl font-extrabold mb-5">
          Create your <span className="color-indigo">professional resume</span>{" "}
          in Just minutes
        </h1>

        <ul className=" w-3/4">
          <li className=" flex items-center justify-start text-lg font-semibold">
            <div className="badge badge-primary badge-sm bg-black outline-none border-transparent mr-4"></div>{" "}
            Choose your resume style from our libraries
          </li>
          <li className=" flex items-center justify-start text-lg font-semibold">
            <div className="badge badge-primary badge-sm bg-black outline-none border-transparent mr-4"></div>{" "}
            Fill all the details properly
          </li>
          <li className=" flex items-center justify-start text-lg font-semibold">
            <div className="badge badge-primary badge-sm bg-black outline-none border-transparent mr-4"></div>{" "}
            Preview and download your resume
          </li>
        </ul>

        <button
          className="btn btn-primary bg-black outline-none border-transparent w-3/4 text-white mt-3 font-bold mb-4"
          style={{ height: "2.4rem", minHeight: "2.4rem" }}
        >
          Build Resume
        </button>
        <div className="w-3/4 text-xs">
          By clicking on
          <span className="ml-1 text-indigo-600 font-semibold cursor-pointer">
            Build resume
          </span>
          , you agree to our
          <span className="ml-1 text-indigo-600 font-semibold cursor-pointer">
            Terms and Conditions
          </span>
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

export default ResumeBuilderStep;
