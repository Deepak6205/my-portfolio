import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68d41298-a775-47ff-ae84-e23185a16616");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>deepak7292832956@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Jharkhand, India</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>7292832956</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.facebook.com/profile.php?id=100008751518468"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', curdor: 'pointer'}}
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/gupta_ji_60/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', curdor: 'pointer'}}
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://x.com/AllDeepakThing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', curdor: 'pointer'}}
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-kumar100/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', curdor: 'pointer'}}
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
