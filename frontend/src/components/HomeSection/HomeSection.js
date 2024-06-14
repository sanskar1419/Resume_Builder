import homeImg from "../../assets/images/Man_Holding_Resume.png";
import resumeImg from "../../assets/images/resume.png";
import childImg from "../../assets/images/Child_Holding_Resume.png";

function HomeSection() {
  return (
    <div
      className="w-auto flex items-center justify-between pt-3 relative"
      style={{ height: "auto", border: "2px solid black" }}
    >
      <div className=" w-1/2 pl-14 flex flex-col" style={{}}>
        <div className=" font-semibold text-gray-500">
          BOOST YOUR CAREER CHASING
        </div>
        <div className=" text-4xl font-black">
          Get dream jobs with our resume{" "}
          <span className=" text-indigo-600 color-indigo">
            Eye Catchy Resumes
          </span>
        </div>
        <div className=" text-gray-600 mt-2 font-medium">
          Build a professional and outstanding resume with our free builder and
          templates.
        </div>
        <button
          className="btn btn-primary bg-indigo-600 w-1/2 text-white mt-3 font-bold mb-4 bg-indigo"
          style={{ height: "2.4rem", minHeight: "2.4rem" }}
        >
          Create New Resume For Free
        </button>
      </div>
      <img src={homeImg} className=" absolute w-2/5" style={{ right: "15%" }} />
      <img
        src={childImg}
        className=" absolute w-2/12"
        style={{ right: "0", bottom: "40px" }}
      />
      <img src={resumeImg} className=" w-2/5 h-full" />
    </div>
  );
}

export default HomeSection;
