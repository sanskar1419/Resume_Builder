import childImage from "../../../assets/images/Child_Holding_Resume.png";
import "./Template4.css";
function Template4() {
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
    <div class="resume">
      <div class="resume_left">
        <div class="resume_profile">
          <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
        </div>
        <div class="resume_content">
          <div class="resume_item resume_info">
            <div class="title">
              <p class="bold">stephen colbert</p>
              <p class="regular">Designer</p>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <i class="fas fa-map-signs"></i>
                </div>
                <div class="data">
                  21 Street, Texas <br /> USA
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="data">+324 4445678</div>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="data">stephen@gmail.com</div>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-weebly"></i>
                </div>
                <div class="data">www.stephen.com</div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_skills">
            <div class="title">
              <p class="bold">skill's</p>
            </div>
            <ul>
              <li>
                <div class="skill_name">HTML</div>
                <div class="skill_progress">
                  <span style={{ width: "80%" }}></span>
                </div>
                <div class="skill_per">80%</div>
              </li>
              <li>
                <div class="skill_name">CSS</div>
                <div class="skill_progress">
                  <span style={{ width: "70%" }}></span>
                </div>
                <div class="skill_per">70%</div>
              </li>
              <li>
                <div class="skill_name">SASS</div>
                <div class="skill_progress">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div class="skill_per">90%</div>
              </li>
              <li>
                <div class="skill_name">JS</div>
                <div class="skill_progress">
                  <span style={{ width: "60%" }}></span>
                </div>
                <div class="skill_per">60%</div>
              </li>
              <li>
                <div class="skill_name">JQUERY</div>
                <div class="skill_progress">
                  <span style={{ width: "70%" }}></span>
                </div>
                <div class="skill_per">88%</div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_social">
            <div class="title">
              <p class="bold">Social</p>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <i class="fab fa-facebook-square"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Facebook</p>
                  <p>Stephen@facebook</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-twitter-square"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Twitter</p>
                  <p>Stephen@twitter</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-youtube"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Youtube</p>
                  <p>Stephen@youtube</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Linkedin</p>
                  <p>Stephen@linkedin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="resume_right">
        <div class="resume_item resume_about">
          <div class="title">
            <p class="bold">About us</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis illo fugit officiis distinctio culpa officia totam
            atque exercitationem inventore repudiandae?
          </p>
        </div>
        <div class="resume_item resume_work">
          <div class="title">
            <p class="bold">Work Experience</p>
          </div>
          <ul>
            <li>
              <div class="date">2013 - 2015</div>
              <div class="info">
                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div class="date">2015 - 2017</div>
              <div class="info">
                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div class="date">2017 - Present</div>
              <div class="info">
                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_education">
          <div class="title">
            <p class="bold">Education</p>
          </div>
          <ul>
            <li>
              <div class="date">2010 - 2013</div>
              <div class="info">
                <p class="semi-bold">Web Designing (Texas University)</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div class="date">2000 - 2010</div>
              <div class="info">
                <p class="semi-bold">Texas International School</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_hobby">
          <div class="title">
            <p class="bold">Hobby</p>
          </div>
          <ul>
            <li>
              <i class="fas fa-book"></i>
            </li>
            <li>
              <i class="fas fa-gamepad"></i>
            </li>
            <li>
              <i class="fas fa-music"></i>
            </li>
            <li>
              <i class="fab fa-pagelines"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template4;
