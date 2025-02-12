import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/152RIfI62iZ5GNt0r-hKHQ0JgQ10VsAhM/view?usp=drive_link";  // Replace with your shareable link

  const openResume = () => {
    window.open(resumeLink, "_blank");
  };


  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile" />
      <h1><span>I'm Deepak,</span> software developer based in India.</h1>
      <p>
        i'm a Enthusiastic software developer from India, crafting innovative
        solutions with curiosity and creativity.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={openResume}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
