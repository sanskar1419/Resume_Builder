import childImage from "../../../assets/images/Child_Holding_Resume.png";
import "./Template5.css";
function Template5() {
  const dataStore = {
    imageFile: childImage,
    personalInfo: {
      firstName: "Luara",
      lastName: "Lance",
      Email: "xyz@gmail.com",
      Mobile: "541565566556",
      Address1: "R.K Nagar",
      Address2: "2nd Batallion T.S.R",
      City: "Agartala",
      State: "Tripura",
      Pin: "799008",
      Objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    workEx: [
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],

    education: [
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
    ],
    skills: [
      { skillName: "HTML" },
      { skillName: "CSS" },
      { skillName: "JavaScript" },
      { skillName: "React" },
      { skillName: "Redux" },
      { skillName: "C" },
      { skillName: "C++" },
      { skillName: "Python" },
      { skillName: "Nodejs" },
    ],
  };
  return (
    <div className="resume-container">
      <div className="header">
        <img
          src="path_to_image.jpg"
          alt="Mariana Anderson"
          className="profile-picture"
        />
        <div className="header-text">
          <h1>Mariana Anderson</h1>
          <h2>Marketing Manager</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra in lorem at laoreet. Donec hendrerit libero eget est
            tempor, quis tempus arcu elementum.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="section">
            <h3>Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
            <p>Address: 123 Anywhere St., Any City</p>
          </div>
          <div className="section">
            <h3>Education</h3>
            <p>
              2008
              <br />
              Enter Your Degree
              <br />
              University/College
            </p>
            <p>
              2008
              <br />
              Enter Your Degree
              <br />
              University/College
            </p>
          </div>
          <div className="section">
            <h3>Expertise</h3>
            <ul>
              <li>UI/UX</li>
              <li>Visual Design</li>
              <li>Wireframes</li>
              <li>Storyboards</li>
              <li>User Flows</li>
              <li>Process Flows</li>
            </ul>
          </div>
          <div className="section">
            <h3>Language</h3>
            <p>English</p>
            <p>Spanish</p>
          </div>
        </div>
        <div className="main">
          <div className="section">
            <h3>Experience</h3>
            <div className="experience">
              <h4>2019 - 2022</h4>
              <h5>Company Name | 123 Anywhere St., Any City</h5>
              <p>Job position here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
            <div className="experience">
              <h4>2017 - 2019</h4>
              <h5>Company Name | 123 Anywhere St., Any City</h5>
              <p>Job position here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
            <div className="experience">
              <h4>2015 - 2017</h4>
              <h5>Company Name | 123 Anywhere St., Any City</h5>
              <p>Job position here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
          </div>
          <div className="section">
            <h3>Reference</h3>
            <div className="reference">
              <p>Name Surname</p>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
            <div className="reference">
              <p>Name Surname</p>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template5;

/* 
import childImage from "../../../assets/images/Child_Holding_Resume.png";
import "./Template5.css";
function Template5() {
  const dataStore = {
    imageFile: childImage,
    personalInfo: {
      firstName: "Luara",
      lastName: "Lance",
      Email: "xyz@gmail.com",
      Mobile: "541565566556",
      Address1: "R.K Nagar",
      Address2: "2nd Batallion T.S.R",
      City: "Agartala",
      State: "Tripura",
      Pin: "799008",
      Objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    workEx: [
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        title: "Software Engineer",
        orgName: "xyz company",
        startYear: "2021",
        endYear: "2023",
        jobDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],

    education: [
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
      {
        Degree: "BTech",
        Type: "Mechanical",
        University: "XYZ University",
        Start: "2021",
        End: "2023",
      },
    ],
    skills: [
      { skillName: "HTML" },
      { skillName: "CSS" },
      { skillName: "JavaScript" },
      { skillName: "React" },
      { skillName: "Redux" },
      { skillName: "C" },
      { skillName: "C++" },
      { skillName: "Python" },
      { skillName: "Nodejs" },
    ],
  };
  return (
    <div className="resume-container">
      <div className="header">
        <h1>Mariana Anderson</h1>
        <h2>Marketing Manager</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor,
          quis tempus arcu elementum. In elementum elit at dui tristique
          feugiat. Mauris convallis, mi at mattis malesuada, neque nulla
          volutpat dolor, hendrerit faucibus eros nibh ut nunc.
        </p>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="section">
            <h3>Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
            <p>Address: 123 Anywhere St., Any City</p>
          </div>
          <div className="section">
            <h3>Education</h3>
            <p>
              2008
              <br />
              Enter Your Degree
              <br />
              University/College
            </p>
            <p>
              2008
              <br />
              Enter Your Degree
              <br />
              University/College
            </p>
          </div>
          <div className="section">
            <h3>Expertise</h3>
            <ul>
              <li>UI/UX</li>
              <li>Visual Design</li>
              <li>Wireframes</li>
              <li>Storyboards</li>
              <li>User Flows</li>
              <li>Process Flows</li>
            </ul>
          </div>
          <div className="section">
            <h3>Language</h3>
            <p>English</p>
            <p>Spanish</p>
          </div>
        </div>
        <div className="main">
          <div className="section">
            <h3>Experience</h3>
            <div className="experience">
              <h4>2019 - 2022</h4>
              <h4>Company Name | 123 Anywhere St., Any City</h4>
              <h5>Job position here</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
            <div className="experience">
              <h4>2017 - 2019</h4>
              <h4>Company Name | 123 Anywhere St., Any City</h4>
              <h5>Job position here</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
            <div className="experience">
              <h4>2015 - 2017</h4>
              <h4>Company Name | 123 Anywhere St., Any City</h4>
              <h5>Job position here</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
                tempor, quis tempus arcu elementum.
              </p>
            </div>
          </div>
          <div className="section">
            <h3>Reference</h3>
            <div className="reference">
              <p>Name Surname</p>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
            <div className="reference">
              <p>Name Surname</p>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template5;

*/
