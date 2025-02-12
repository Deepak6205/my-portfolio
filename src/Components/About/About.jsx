import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="aboutprofile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Driven software developer from India, stepping into the tech world
              with curiosity and determination. Ready to craft impactful digital
              solutions while learning and growing with every challenge.
            </p>
            <p>
              blending fresh ideas with technical skills to build creative,
              user-focused solutions. Always eager to learn, adapt, and
              innovate.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Nodejs</p>
              <hr style={{ width: "53%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "48%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>            
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>            
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>            
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>200+</h1>
            <p>DSA PROBLEMS SOLVED</p>            
        </div>
      </div>
    </div>
  );
};

export default About;
