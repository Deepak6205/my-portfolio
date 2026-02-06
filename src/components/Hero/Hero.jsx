import "./Hero.css";
import side_profile from "../../assets/side_profile.png";


const Hero = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1mlo7SXVoXNbNDbiCgZmw2WMUbl8iMQVZ/view?usp=drive_link"; 

  const openResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <div id="home" className="hero">
      <img src={side_profile} alt="profile" />
      <h1>
        <span>I'm Deepak,</span> software developer based in India.
      </h1>
      <p>
        i'm a Enthusiastic software developer from India, crafting innovative
        solutions with curiosity and creativity.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <div
            className="anchor-link"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Connect with me
          </div>
        </div>
        <div className="hero-resume" onClick={openResume}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
