import "./Socials.css";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import google from "./images/google-plus.svg";
import linkedin from "./images/linkedin.svg";

function Socials() {
  return (
    <div className="socials">
      <ul className="socials-list">
        <li>
          <a href="/">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={google} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
