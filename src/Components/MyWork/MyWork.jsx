import { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreThanSix = mywork_data.length > 6;

  const visibleProjects = showAll
    ? mywork_data
    : mywork_data.slice(0, 6);

  const handleToggle = () => {
    if (!hasMoreThanSix) return; // disable click if <= 6
    setShowAll(prev => !prev);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="mywork-container">
        {visibleProjects.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mywork-item"
          >
            <img src={work.w_img} alt={work.title} />
          </a>
        ))}
      </div>

      {/* Button always visible */}
      <div
        className="mywork-showmore"
        onClick={handleToggle}
        style={{
          opacity: hasMoreThanSix ? 1 : 0.5,
          cursor: hasMoreThanSix ? "pointer" : "not-allowed",
        }}
      >
        <p>
          {showAll ? "Show Less" : "Show More"}
        </p>
        <img
          src={arrow_icon}
          alt="arrow"
          style={{
            transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </div>
    </div>
  );
};

export default MyWork;
